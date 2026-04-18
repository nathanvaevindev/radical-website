"use client";

import { useEffect, useRef } from "react";

type ParticleField = {
  restX: Float32Array;
  restY: Float32Array;
  isEdge: Uint8Array;
  outDirX: Float32Array;
  outDirY: Float32Array;
};

type AmbientParticle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  phase: number;
};

// ── Responsive config ──────────────────────────────────────────
function getConfig(width: number) {
  if (width < 768) {
    return {
      count: 1000,
      dotRadius: 1.2,
      opacity: 0.45,
      rScale: 0.55,
      repelRadius: 70,
      repelStrength: 5,
      ambientCount: 16,
      ambientSpeed: 0.3,
    };
  }
  if (width < 1024) {
    return {
      count: 1600,
      dotRadius: 1.4,
      opacity: 0.7,
      rScale: 0.62,
      repelRadius: 110,
      repelStrength: 8,
      ambientCount: 22,
      ambientSpeed: 0.35,
    };
  }
  return {
    count: 2400,
    dotRadius: 1.5,
    opacity: 0.85,
    rScale: 0.7,
    repelRadius: 150,
    repelStrength: 12,
    ambientCount: 28,
    ambientSpeed: 0.4,
  };
}

// ── Sample particle positions from the Radical favicon silhouette ─
function sampleFavicon(
  img: HTMLImageElement,
  count: number,
  w: number,
  h: number,
  rScale: number
): ParticleField {
  const S = 256;
  const off = document.createElement("canvas");
  off.width = S;
  off.height = S;
  const c = off.getContext("2d", { willReadFrequently: true })!;

  c.clearRect(0, 0, S, S);
  c.drawImage(img, 0, 0, S, S);

  const data = c.getImageData(0, 0, S, S).data;
  const px: number[] = [];
  const py: number[] = [];
  const pxEdge: boolean[] = [];
  let minX = S;
  let minY = S;
  let maxX = 0;
  let maxY = 0;
  let sumX = 0;
  let sumY = 0;

  // Collect non-transparent pixels + edge detection via 4-neighbor lookup
  for (let y = 0; y < S; y += 2) {
    for (let x = 0; x < S; x += 2) {
      const alpha = data[(y * S + x) * 4 + 3];
      if (alpha <= 32) continue;

      const aUp = y - 1 < 0 ? 0 : data[((y - 1) * S + x) * 4 + 3];
      const aDown = y + 1 >= S ? 0 : data[((y + 1) * S + x) * 4 + 3];
      const aLeft = x - 1 < 0 ? 0 : data[(y * S + (x - 1)) * 4 + 3];
      const aRight = x + 1 >= S ? 0 : data[(y * S + (x + 1)) * 4 + 3];
      const edge =
        aUp <= 32 || aDown <= 32 || aLeft <= 32 || aRight <= 32;

      px.push(x);
      py.push(y);
      pxEdge.push(edge);
      sumX += x;
      sumY += y;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }

  const restX = new Float32Array(count);
  const restY = new Float32Array(count);
  const isEdge = new Uint8Array(count);
  const outDirX = new Float32Array(count);
  const outDirY = new Float32Array(count);
  const len = px.length;

  if (len === 0) {
    for (let i = 0; i < count; i++) {
      restX[i] = w / 2 + (Math.random() - 0.5) * 100;
      restY[i] = h / 2 + (Math.random() - 0.5) * 100;
    }
    return { restX, restY, isEdge, outDirX, outDirY };
  }

  // Normalize against the tight bounding box so transparent padding is ignored
  const bboxW = Math.max(1, maxX - minX);
  const bboxH = Math.max(1, maxY - minY);
  const scale = Math.min(w / bboxW, h / bboxH) * rScale;
  const renderW = bboxW * scale;
  const renderH = bboxH * scale;
  const ox = (w - renderW) / 2;
  const oy = (h - renderH) / 2;

  // Shape centroid (in 256-space) for outward-direction calculation
  const cx = sumX / len;
  const cy = sumY / len;

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * len);
    restX[i] = ox + (px[idx] - minX) * scale + (Math.random() - 0.5) * 2;
    restY[i] = oy + (py[idx] - minY) * scale + (Math.random() - 0.5) * 2;
    isEdge[i] = pxEdge[idx] ? 1 : 0;

    const dx = px[idx] - cx;
    const dy = py[idx] - cy;
    const d = Math.hypot(dx, dy) || 1;
    outDirX[i] = dx / d;
    outDirY[i] = dy / d;
  }
  return { restX, restY, isEdge, outDirX, outDirY };
}

// ── Ambient particle helpers ─────────────────────────────────
function spawnAmbient(
  w: number,
  h: number,
  speed: number
): AmbientParticle {
  const side = Math.floor(Math.random() * 4);
  const cx = w / 2;
  const cy = h / 2;
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  const s = speed * (0.7 + Math.random() * 0.6);

  if (side === 0) {
    x = -20;
    y = Math.random() * h;
    vx = s;
    vy = ((cy - y) / h) * s * 0.8;
  } else if (side === 1) {
    x = w + 20;
    y = Math.random() * h;
    vx = -s;
    vy = ((cy - y) / h) * s * 0.8;
  } else if (side === 2) {
    x = Math.random() * w;
    y = -20;
    vx = ((cx - x) / w) * s * 0.8;
    vy = s;
  } else {
    x = Math.random() * w;
    y = h + 20;
    vx = ((cx - x) / w) * s * 0.8;
    vy = -s;
  }
  return { x, y, vx, vy, phase: Math.random() * Math.PI * 2 };
}

export default function ParticleRCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let teardown: (() => void) | null = null;

    const img = new Image();
    img.decoding = "async";
    img.src = "/favicon1.png";

    img.onload = () => {
      if (cancelled) return;
      teardown = start(canvas, parent, ctx, img);
    };

    function start(
      canvas: HTMLCanvasElement,
      parent: HTMLElement,
      ctx: CanvasRenderingContext2D,
      img: HTMLImageElement
    ): () => void {
      let w = parent.clientWidth;
      let h = parent.clientHeight;
      if (w === 0 || h === 0) return () => {};

      const dpr = Math.min(window.devicePixelRatio, 2);

      function setSize() {
        w = parent.clientWidth;
        h = parent.clientHeight;
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      setSize();

      const cfg = getConfig(w);
      const N = cfg.count;

      // ── Main figure particles ───────────────────────────────
      const { restX, restY, isEdge, outDirX, outDirY } = sampleFavicon(
        img,
        N,
        w,
        h,
        cfg.rScale
      );
      const curX = new Float32Array(restX);
      const curY = new Float32Array(restY);
      const velX = new Float32Array(N);
      const velY = new Float32Array(N);

      // Per-particle random phase for organic motion
      const phase = new Float32Array(N);
      for (let i = 0; i < N; i++) phase[i] = Math.random() * Math.PI * 2;

      // ── Ambient particles ───────────────────────────────────
      const ambientCount = cfg.ambientCount;
      const ambient: AmbientParticle[] = [];
      for (let k = 0; k < ambientCount; k++) {
        const a = spawnAmbient(w, h, cfg.ambientSpeed);
        // Spread starting positions so they don't all enter at once
        a.x = Math.random() * w;
        a.y = Math.random() * h;
        ambient.push(a);
      }

      // ── Motion constants ────────────────────────────────────
      const RETURN = 0.04;
      const DAMP = 0.87;

      // Idle motion — clearly visible buzz
      const FLOAT_AMP = 3.7;
      const FLOAT_SPEED = 0.52;
      const SHIMMER_AMP = 0.9;
      const SHIMMER_SPEED = 3.8;
      const BREATH_SPEED = 0.65;
      const BREATH_DEPTH = 0.22;

      // Edge dynamics — occasional small outward pop
      const EDGE_IMPULSE = 0.55;
      const EDGE_PROB = 0.0004;

      // Ambient
      const AMBIENT_WOBBLE_AMP = 0.25;
      const AMBIENT_WOBBLE_SPEED = 0.8;
      const AMBIENT_OPACITY_MULT = 0.5;
      const AMBIENT_DOT_R = cfg.dotRadius;

      const repelR = cfg.repelRadius;
      const repelSq = repelR * repelR;
      const repelStr = cfg.repelStrength;
      const dotR = cfg.dotRadius;
      const alpha = cfg.opacity;

      let time = 0;

      function animate() {
        raf.current = requestAnimationFrame(animate);
        time += 0.016;

        ctx.clearRect(0, 0, w, h);

        const mx = mouse.current.x;
        const my = mouse.current.y;

        // Global slow breath envelope — modulates drift amplitude field-wide
        const breath = 1 + Math.sin(time * BREATH_SPEED) * BREATH_DEPTH;
        const driftAmp = FLOAT_AMP * breath;

        // ── Main figure physics ───────────────────────────────
        for (let i = 0; i < N; i++) {
          const p = phase[i];

          // Slow per-particle drift + fast decorrelated micro-shimmer
          const fx =
            Math.sin(time * FLOAT_SPEED + p) * driftAmp +
            Math.sin(time * SHIMMER_SPEED + p * 2.7) * SHIMMER_AMP;
          const fy =
            Math.cos(time * FLOAT_SPEED * 0.7 + p * 1.4) * driftAmp +
            Math.cos(time * SHIMMER_SPEED * 1.15 + p * 3.1) * SHIMMER_AMP;

          const tx = restX[i] + fx;
          const ty = restY[i] + fy;

          // Edge dynamics — occasional outward impulse on silhouette particles
          if (isEdge[i] && Math.random() < EDGE_PROB) {
            velX[i] += outDirX[i] * EDGE_IMPULSE;
            velY[i] += outDirY[i] * EDGE_IMPULSE;
          }

          // Mouse repulsion
          const dx = curX[i] - mx;
          const dy = curY[i] - my;
          const dSq = dx * dx + dy * dy;

          if (dSq < repelSq && dSq > 1) {
            const d = Math.sqrt(dSq);
            const f = ((1 - d / repelR) ** 2) * repelStr;
            velX[i] += (dx / d) * f;
            velY[i] += (dy / d) * f;
          }

          // Spring back toward animated target
          velX[i] += (tx - curX[i]) * RETURN;
          velY[i] += (ty - curY[i]) * RETURN;

          // Damp
          velX[i] *= DAMP;
          velY[i] *= DAMP;

          // Integrate
          curX[i] += velX[i];
          curY[i] += velY[i];
        }

        // ── Ambient particle update ───────────────────────────
        for (let k = 0; k < ambientCount; k++) {
          const a = ambient[k];
          const wobbleX =
            Math.sin(time * AMBIENT_WOBBLE_SPEED + a.phase) *
            AMBIENT_WOBBLE_AMP;
          const wobbleY =
            Math.cos(time * AMBIENT_WOBBLE_SPEED * 0.85 + a.phase * 1.3) *
            AMBIENT_WOBBLE_AMP;

          a.x += a.vx + wobbleX;
          a.y += a.vy + wobbleY;

          if (a.x < -40 || a.x > w + 40 || a.y < -40 || a.y > h + 40) {
            ambient[k] = spawnAmbient(w, h, cfg.ambientSpeed);
          }
        }

        // ── Draw main figure ──────────────────────────────────
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#2ed573";
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          ctx.moveTo(curX[i] + dotR, curY[i]);
          ctx.arc(curX[i], curY[i], dotR, 0, Math.PI * 2);
        }
        ctx.fill();

        // ── Draw ambient particles (lower opacity) ───────────
        ctx.globalAlpha = alpha * AMBIENT_OPACITY_MULT;
        ctx.beginPath();
        for (let k = 0; k < ambientCount; k++) {
          const a = ambient[k];
          ctx.moveTo(a.x + AMBIENT_DOT_R, a.y);
          ctx.arc(a.x, a.y, AMBIENT_DOT_R, 0, Math.PI * 2);
        }
        ctx.fill();

        ctx.globalAlpha = 1;
      }

      animate();

      // Pointer events
      function onMove(e: PointerEvent) {
        const rect = parent.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      }
      function onLeave() {
        mouse.current.x = -9999;
        mouse.current.y = -9999;
      }
      function onResize() {
        setSize();
      }

      parent.addEventListener("pointermove", onMove);
      parent.addEventListener("pointerleave", onLeave);
      window.addEventListener("resize", onResize);

      return () => {
        cancelAnimationFrame(raf.current);
        parent.removeEventListener("pointermove", onMove);
        parent.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("resize", onResize);
      };
    }

    return () => {
      cancelled = true;
      if (teardown) teardown();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  );
}
