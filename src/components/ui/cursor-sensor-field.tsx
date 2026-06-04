"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

function rgba(rgb: string, alpha: number) {
  return `rgba(${rgb}, ${alpha})`;
}

export function CursorSensorField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }

    const canvasElement = canvasRef.current!;

    const context = canvasElement.getContext("2d");

    if (!context) {
      return;
    }

    const drawingContext = context;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)");
    const pointer = { x: -9999, y: -9999, active: false };
    const particles: Particle[] = [];
    let animationFrame = 0;
    let resizeObserver: ResizeObserver | null = null;
    let width = 0;
    let height = 0;
    let running = true;

    function getParticleCount() {
      if (reducedMotion.matches) {
        return 0;
      }

      if (coarsePointer.matches) {
        return Math.min(8, Math.max(0, Math.floor(width / 180)));
      }

      if (width < 640) {
        return 10;
      }

      if (width < 1024) {
        return 24;
      }

      return 36;
    }

    function syncCanvasSize() {
      const ratio = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvasElement.width = Math.floor(width * ratio);
      canvasElement.height = Math.floor(height * ratio);
      canvasElement.style.width = `${width}px`;
      canvasElement.style.height = `${height}px`;
      drawingContext.setTransform(ratio, 0, 0, ratio, 0, 0);
      rebuildParticles();
    }

    function rebuildParticles() {
      const targetCount = getParticleCount();

      while (particles.length > targetCount) {
        particles.pop();
      }

      while (particles.length < targetCount) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
        });
      }
    }

    function getThemeColors() {
      const isDark = document.documentElement.classList.contains("dark");

      return isDark
        ? {
            dotRgb: "208, 203, 197",
            lineRgb: "132, 160, 190",
            glowRgb: "146, 169, 151",
          }
        : {
            dotRgb: "81, 74, 80",
            lineRgb: "126, 142, 166",
            glowRgb: "127, 151, 136",
          };
    }

    function handlePointerMove(event: PointerEvent) {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    }

    function handlePointerLeave() {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    }

    function handleVisibilityChange() {
      running = document.visibilityState === "visible";

      if (running) {
        animationFrame = window.requestAnimationFrame(draw);
      } else {
        window.cancelAnimationFrame(animationFrame);
      }
    }

    function draw() {
      if (!running) {
        return;
      }

      drawingContext.clearRect(0, 0, width, height);

      if (particles.length === 0) {
        animationFrame = window.requestAnimationFrame(draw);
        return;
      }

      const colors = getThemeColors();
      const connectionDistance = width < 768 ? 90 : 120;
      const cursorRadius = width < 768 ? 90 : 130;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
        }

        if (pointer.active) {
          const dx = pointer.x - particle.x;
          const dy = pointer.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < cursorRadius && distance > 0) {
            const force = (cursorRadius - distance) / cursorRadius;
            particle.x -= (dx / distance) * force * 0.6;
            particle.y -= (dy / distance) * force * 0.6;
          }
        }
      }

      if (pointer.active && !coarsePointer.matches) {
        const glow = drawingContext.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          cursorRadius,
        );
        glow.addColorStop(0, rgba(colors.glowRgb, 0.18));
        glow.addColorStop(1, rgba(colors.glowRgb, 0));
        drawingContext.fillStyle = glow;
        drawingContext.beginPath();
        drawingContext.arc(pointer.x, pointer.y, cursorRadius, 0, Math.PI * 2);
        drawingContext.fill();
      }

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          );

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance;
            drawingContext.strokeStyle = rgba(colors.lineRgb, 0.16);
            drawingContext.globalAlpha = opacity;
            drawingContext.lineWidth = 1;
            drawingContext.beginPath();
            drawingContext.moveTo(particle.x, particle.y);
            drawingContext.lineTo(nextParticle.x, nextParticle.y);
            drawingContext.stroke();
            drawingContext.globalAlpha = 1;
          }
        }
      }

      drawingContext.fillStyle = rgba(colors.dotRgb, 0.4);

      for (const particle of particles) {
        drawingContext.beginPath();
        drawingContext.arc(particle.x, particle.y, 1.8, 0, Math.PI * 2);
        drawingContext.fill();
      }

      animationFrame = window.requestAnimationFrame(draw);
    }

    syncCanvasSize();
    draw();

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotion.addEventListener("change", syncCanvasSize);
    coarsePointer.addEventListener("change", syncCanvasSize);

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(syncCanvasSize);
      resizeObserver.observe(document.body);
    } else {
      window.addEventListener("resize", syncCanvasSize, { passive: true });
    }

    return () => {
      running = false;
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotion.removeEventListener("change", syncCanvasSize);
      coarsePointer.removeEventListener("change", syncCanvasSize);
      resizeObserver?.disconnect();
      window.removeEventListener("resize", syncCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-80"
    />
  );
}
