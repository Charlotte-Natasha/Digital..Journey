import React, { useEffect, useRef } from 'react';

const BackgroundParticles = ({ children }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = Math.random() * 0.4 - 0.2;
        this.speedY = Math.random() * 0.4 - 0.2;
        this.hue = Math.random() * 40 + 300;
        this.life = Math.random() * 200 + 100;
        this.maxLife = this.life;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 0.3;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        if (this.life <= 0) {
          this.reset();
        }
      }

      draw(ctx) {
        const alpha = this.life / this.maxLife;
        ctx.fillStyle = `hsla(${this.hue}, 80%, 65%, ${alpha * 0.5})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 65%, ${alpha * 0.3})`;
      }
    }

    const particleArray = [];
    const particleCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));

    for (let i = 0; i < particleCount; i++) {
      particleArray.push(new Particle());
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = 0;

      particleArray.forEach((particle, i) => {
        particle.update();
        particle.draw(ctx);

        for (let j = i + 1; j < particleArray.length; j++) {
          const dx = particle.x - particleArray[j].x;
          const dy = particle.y - particleArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const alpha = ((1 - distance / 120) * (particle.life / particle.maxLife)) * 0.15;
            const avgHue = (particle.hue + particleArray[j].hue) / 2;
            
            ctx.strokeStyle = `hsla(${avgHue}, 80%, 65%, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particleArray[j].x, particleArray[j].y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      resizeCanvas();
      particleArray.length = 0;
      const newCount = Math.min(150, Math.floor((canvas.width * canvas.height) / 10000));
      for (let i = 0; i < newCount; i++) {
        particleArray.push(new Particle());
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none"
        style={{
          zIndex: -1,
          background: 'linear-gradient(to bottom, #000000, #1a0014, #000000)',
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundParticles;