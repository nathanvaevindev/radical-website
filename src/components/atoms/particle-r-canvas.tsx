"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

// ── Responsive configuration ───────────────────────────────────
function getConfig(width: number) {
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;

  if (isMobile) {
    return {
      particleCount: 800,
      particleSize: 2.0,
      opacity: 0.25,
      lineOpacity: 0.04,
      lineDistance: 14,
      rScale: 0.85,
      repelRadius: 80,
      repelStrength: 6,
    };
  }
  if (isTablet) {
    return {
      particleCount: 1200,
      particleSize: 2.8,
      opacity: 0.4,
      lineOpacity: 0.07,
      lineDistance: 18,
      rScale: 0.88,
      repelRadius: 110,
      repelStrength: 8,
    };
  }
  // Desktop
  return {
    particleCount: 2200,
    particleSize: 3.2,
    opacity: 0.55,
    lineOpacity: 0.1,
    lineDistance: 20,
    rScale: 0.92,
    repelRadius: 140,
    repelStrength: 10,
  };
}

// Shared constants
const SMARAGD = 0x2ed573;
const SMARAGD_BRIGHT = 0x5ee89a;
const LINE_COLOR = 0x2ed573;
const RETURN_SPEED = 0.035;
const FLOAT_AMPLITUDE = 2.5;
const FLOAT_SPEED = 0.4;

// ── Sample points inside an "R" glyph ──────────────────────────
function sampleRPoints(
  count: number,
  width: number,
  height: number,
  rScale: number
): Float32Array {
  const size = 256;
  const offscreen = document.createElement("canvas");
  offscreen.width = size;
  offscreen.height = size;
  const ctx = offscreen.getContext("2d")!;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, size, size);

  ctx.fillStyle = "#fff";
  ctx.font = `bold ${size * 0.82}px Arial, Helvetica, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("R", size / 2, size / 2 + size * 0.02);

  const imageData = ctx.getImageData(0, 0, size, size).data;
  const whitePixels: [number, number][] = [];
  for (let y = 0; y < size; y += 2) {
    for (let x = 0; x < size; x += 2) {
      if (imageData[(y * size + x) * 4] > 128) {
        whitePixels.push([x, y]);
      }
    }
  }

  if (whitePixels.length === 0) {
    const positions = new Float32Array(count * 2);
    for (let i = 0; i < count; i++) {
      positions[i * 2] = width / 2 + (Math.random() - 0.5) * 100;
      positions[i * 2 + 1] = height / 2 + (Math.random() - 0.5) * 100;
    }
    return positions;
  }

  // Scale the R to fill the viewport as a background element
  const scale = Math.min(width, height) * rScale;
  const offsetX = (width - scale) / 2;
  const offsetY = (height - scale) / 2;

  const positions = new Float32Array(count * 2);
  for (let i = 0; i < count; i++) {
    const [px, py] =
      whitePixels[Math.floor(Math.random() * whitePixels.length)];
    positions[i * 2] =
      offsetX + (px / size) * scale + (Math.random() - 0.5) * 2.5;
    positions[i * 2 + 1] =
      offsetY + (py / size) * scale + (Math.random() - 0.5) * 2.5;
  }
  return positions;
}

// ── Soft circle particle texture ───────────────────────────────
function createParticleTexture(): THREE.Texture {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = s;
  c.height = s;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.2, "rgba(255,255,255,0.9)");
  g.addColorStop(0.5, "rgba(255,255,255,0.3)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

export default function ParticleRCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const frameId = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;
    if (width === 0 || height === 0) return;

    const cfg = getConfig(width);

    // ── Renderer ──
    const dpr = Math.min(window.devicePixelRatio, 2);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(dpr);
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);

    const canvasEl = renderer.domElement;
    canvasEl.style.position = "absolute";
    canvasEl.style.inset = "0";
    canvasEl.style.width = "100%";
    canvasEl.style.height = "100%";
    container.appendChild(canvasEl);

    // ── Scene & Camera (pixel-space orthographic) ──
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, width, 0, height, -1, 1);
    camera.position.z = 1;

    // ── Particle positions (pixel-space) ──
    const COUNT = cfg.particleCount;
    const restPositions = sampleRPoints(COUNT, width, height, cfg.rScale);
    const curX = new Float32Array(COUNT);
    const curY = new Float32Array(COUNT);
    const velX = new Float32Array(COUNT);
    const velY = new Float32Array(COUNT);

    for (let i = 0; i < COUNT; i++) {
      curX[i] = restPositions[i * 2];
      curY[i] = restPositions[i * 2 + 1];
    }

    // ── Points geometry ──
    const posArray = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const cBright = new THREE.Color(SMARAGD_BRIGHT);
    const cBase = new THREE.Color(SMARAGD);

    for (let i = 0; i < COUNT; i++) {
      posArray[i * 3] = curX[i];
      posArray[i * 3 + 1] = curY[i];
      posArray[i * 3 + 2] = 0;
      // Mix between bright and base for variation
      const c = cBright.clone().lerp(cBase, Math.random() * 0.6);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(posArray, 3)
    );
    geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const pointsMaterial = new THREE.PointsMaterial({
      size: cfg.particleSize * dpr,
      sizeAttenuation: false,
      map: createParticleTexture(),
      vertexColors: true,
      transparent: true,
      opacity: cfg.opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    scene.add(points);

    // ── Lines between nearby particles ──
    const MAX_LINES = COUNT * 3;
    const linePositions = new Float32Array(MAX_LINES * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: LINE_COLOR,
      transparent: true,
      opacity: cfg.lineOpacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ── Spatial grid for neighbour lookup ──
    const LINE_DIST_SQ = cfg.lineDistance * cfg.lineDistance;

    function updateLines() {
      let lineIdx = 0;
      const cellSize = cfg.lineDistance;
      const grid = new Map<string, number[]>();

      for (let i = 0; i < COUNT; i++) {
        const cx = Math.floor(curX[i] / cellSize);
        const cy = Math.floor(curY[i] / cellSize);
        const key = `${cx},${cy}`;
        let bucket = grid.get(key);
        if (!bucket) {
          bucket = [];
          grid.set(key, bucket);
        }
        bucket.push(i);
      }

      outer: for (const [key, indices] of grid) {
        const [cx, cy] = key.split(",").map(Number);
        for (let dx = 0; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const neighbours = grid.get(`${cx + dx},${cy + dy}`);
            if (!neighbours) continue;
            for (const i of indices) {
              for (const j of neighbours) {
                if (j <= i) continue;
                const ddx = curX[i] - curX[j];
                const ddy = curY[i] - curY[j];
                if (ddx * ddx + ddy * ddy < LINE_DIST_SQ) {
                  if (lineIdx >= MAX_LINES) break outer;
                  const li = lineIdx * 6;
                  linePositions[li] = curX[i];
                  linePositions[li + 1] = curY[i];
                  linePositions[li + 2] = 0;
                  linePositions[li + 3] = curX[j];
                  linePositions[li + 4] = curY[j];
                  linePositions[li + 5] = 0;
                  lineIdx++;
                }
              }
            }
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIdx * 2);
      (
        lineGeometry.attributes.position as THREE.BufferAttribute
      ).needsUpdate = true;
    }

    // ── Resize handler ──
    function resize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      renderer.setSize(w, h);
      camera.right = w;
      camera.bottom = h;
      camera.updateProjectionMatrix();
    }
    window.addEventListener("resize", resize);

    // ── Pointer events ──
    function onPointerMove(e: PointerEvent) {
      const rect = container!.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    }
    function onPointerLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerleave", onPointerLeave);

    // ── Animation loop ──
    let time = 0;
    let lineFrame = 0;
    const posAttr = geometry.attributes.position as THREE.BufferAttribute;
    const repelSq = cfg.repelRadius * cfg.repelRadius;

    function animate() {
      frameId.current = requestAnimationFrame(animate);
      time += 0.016;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < COUNT; i++) {
        const fo = i * 0.37;
        const floatX =
          Math.sin(time * FLOAT_SPEED + fo) * FLOAT_AMPLITUDE;
        const floatY =
          Math.cos(time * FLOAT_SPEED * 0.7 + fo * 1.3) * FLOAT_AMPLITUDE;

        const tx = restPositions[i * 2] + floatX;
        const ty = restPositions[i * 2 + 1] + floatY;

        // Mouse repulsion
        const dx = curX[i] - mx;
        const dy = curY[i] - my;
        const dSq = dx * dx + dy * dy;

        if (dSq < repelSq && dSq > 1) {
          const d = Math.sqrt(dSq);
          const force = (1 - d / cfg.repelRadius) * cfg.repelStrength;
          velX[i] += (dx / d) * force;
          velY[i] += (dy / d) * force;
        }

        // Spring back
        velX[i] += (tx - curX[i]) * RETURN_SPEED;
        velY[i] += (ty - curY[i]) * RETURN_SPEED;

        // Damping
        velX[i] *= 0.88;
        velY[i] *= 0.88;

        // Integrate
        curX[i] += velX[i];
        curY[i] += velY[i];

        posArray[i * 3] = curX[i];
        posArray[i * 3 + 1] = curY[i];
      }

      posAttr.needsUpdate = true;

      lineFrame++;
      if (lineFrame % 3 === 0) updateLines();

      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId.current);
      window.removeEventListener("resize", resize);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      renderer.dispose();
      geometry.dispose();
      pointsMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      canvasEl.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      aria-hidden="true"
    />
  );
}
