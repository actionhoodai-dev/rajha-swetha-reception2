'use client';

import { useEffect, useRef } from 'react';

export default function AmbientLightingCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Warm atmospheric bokeh particles simulating evening hanging lights and candle glow
    const particleCount = window.innerWidth < 768 ? 16 : 28;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 45 + 15,
      baseAlpha: Math.random() * 0.15 + 0.05,
      alphaSpeed: Math.random() * 0.01 + 0.004,
      alphaOffset: Math.random() * Math.PI * 2,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.2,
      // Color: warm amber, candle gold, soft champagne
      color: Math.random() > 0.4 ? '243, 199, 124' : '229, 157, 72',
    }));

    let time = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.02;

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const currentAlpha = p.baseAlpha + Math.sin(time + p.alphaOffset) * 0.04;
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, currentAlpha)})`);
        gradient.addColorStop(0.5, `rgba(${p.color}, ${Math.max(0, currentAlpha * 0.4)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 4,
        opacity: 0.85,
        mixBlendMode: 'screen',
      }}
    />
  );
}
