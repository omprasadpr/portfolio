import React, { useEffect, useRef } from 'react';

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particleCount = Math.min(Math.floor(window.innerWidth / 20), 45);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        color: i % 2 === 0 ? 'rgba(139, 92, 246, ' : 'rgba(168, 85, 247, ',
        alpha: Math.random() * 0.5 + 0.2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseFactor: Math.random() * Math.PI,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseFactor += p.pulseSpeed;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const currentAlpha = p.alpha + Math.sin(p.pulseFactor) * 0.15;
        const radius = p.radius + Math.sin(p.pulseFactor) * 0.5;

        // Draw glowing particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(radius, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${Math.max(0.1, Math.min(currentAlpha, 0.8))})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#8B5CF6';
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
    />
  );
}
