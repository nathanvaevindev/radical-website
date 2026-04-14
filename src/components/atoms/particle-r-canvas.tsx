"use client";

import { useEffect, useRef } from "react";

// ── Responsive config ──────────────────────────────────────────
function getConfig(width: number) {
  if (width < 768) {
    return {
      count: 1000,
      dotRadius: 1.2,
      opacity: 0.45,
      rScale: 0.82,
      repelRadius: 70,
      repelStrength: 5,
    };
  }
  if (width < 1024) {
    return {
      count: 1600,
      dotRadius: 1.4,
      opacity: 0.7,
      rScale: 0.88,
      repelRadius: 110,
      repelStrength: 8,
    };
  }
  return {
    count: 2400,
    dotRadius: 1.5,
    opacity: 0.85,
    rScale: 0.92,
    repelRadius: 150,
    repelStrength: 12,
  };
}

// ── Sample pixel positions from an "R" glyph ──────────────────
function sampleR(
  count: number,
  w: number,
  h: number,
  rScale: number
): { restX: Float32Array; restY: Float32Array } {
  const S = 256;
  const off = document.createElement("canvas");
  off.width = S;
  off.height = S;
  const c = off.getContext("2d")!;

  c.fillStyle = "#000";
  c.fillRect(0, 0, S, S);
  c.fillStyle = "#fff";
  c.font = `bold ${S * 0.82}px Arial, Helvetica, sans-serif`;
  c.textAlign = "center";
  c.textBaseline = "middle";
  c.fillText("R", S / 2, S / 2 + S * 0.02);

  const data = c.getImageData(0, 0, S, S).data;
  const px: number[] = [];
  const py: number[] = [];
  for (let y = 0; y < S; y += 2) {
    for (let x = 0; x < S; x += 2) {
      if (data[(y * S + x) * 4] > 128) {
        px.push(x);
        py.push(y);
      }
    }
  }

  const scale = Math.min(w, h) * rScale;
  const ox = (w - scale) / 2;
  const oy = (h - scale) / 2;

  const restX = new Float32Array(count);
  const restY = new Float32Array(count);
  const len = px.length;

  if (len === 0) {
    for (let i = 0; i < count; i++) {
      restX[i] = w / 2 + (Math.random() - 0.5) * 100;
      restY[i] = h / 2 + (Math.random() - 0.5) * 100;
    }
    return { restX, restY };
  }

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * len);
    restX[i] = ox + (px[idx] / S) * scale + (Math.random() - 0.5) * 2;
    restY[i] = oy + (py[idx] / S) * scale + (Math.random() - 0.5) * 2;
  }
  return { restX, restY };
}

export default function ParticleRCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const raf = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement!;
    const ctx = canvas.getContext("2d")!;

    let w = parent.clientWidth;
    let h = parent.clientHeight;
    if (w === 0 || h === 0) return;

    const dpr = Math.min(window.devicePixelRatio, 2);

    function setSize() {
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    setSize();

    const cfg = getConfig(w);
    const N = cfg.count;

    // Particle state
    const { restX, restY } = sampleR(N, w, h, cfg.rScale);
    const curX = new Float32Array(restX);
    const curY = new Float32Array(restY);
    const velX = new Float32Array(N);
    const velY = new Float32Array(N);

    // Per-particle random phase for organic float
    const phase = new Float32Array(N);
    for (let i = 0; i < N; i++) phase[i] = Math.random() * Math.PI * 2;

    // Physics constants
    const RETURN = 0.04;
    const DAMP = 0.87;
    const FLOAT_AMP = 2.5;
    const FLOAT_SPEED = 0.3;
    const repelR = cfg.repelRadius;
    const repelSq = repelR * repelR;
    const repelStr = cfg.repelStrength;
    const dotR = cfg.dotRadius;
    const alpha = cfg.opacity;

    let time = 0;

    function animate() {
      raf.current = requestAnimationFrame(animate);
      time += 0.016;

      // Clear
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;

      // Update physics
      for (let i = 0; i < N; i++) {
        const p = phase[i];
        const fx = Math.sin(time * FLOAT_SPEED + p) * FLOAT_AMP;
        const fy = Math.cos(time * FLOAT_SPEED * 0.7 + p * 1.4) * FLOAT_AMP;

        const tx = restX[i] + fx;
        const ty = restY[i] + fy;

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

        // Spring back
        velX[i] += (tx - curX[i]) * RETURN;
        velY[i] += (ty - curY[i]) * RETURN;

        // Damp
        velX[i] *= DAMP;
        velY[i] *= DAMP;

        // Integrate
        curX[i] += velX[i];
        curY[i] += velY[i];
      }

      // Draw all particles in a single path
      ctx.globalAlpha = alpha;
      ctx.fillStyle = "#2ed573";
      ctx.beginPath();
      for (let i = 0; i < N; i++) {
        ctx.moveTo(curX[i] + dotR, curY[i]);
        ctx.arc(curX[i], curY[i], dotR, 0, Math.PI * 2);
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
    parent.addEventListener("pointermove", onMove);
    parent.addEventListener("pointerleave", onLeave);

    // Resize
    function onResize() {
      setSize();
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf.current);
      parent.removeEventListener("pointermove", onMove);
      parent.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
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
