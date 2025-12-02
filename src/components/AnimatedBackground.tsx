import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Wave configuration
    const waves: Array<{
      y: number;
      length: number;
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      color: string;
    }> = [
      { y: 100, length: 0.01, amplitude: 80, frequency: 0.01, phase: 0, speed: 0.02, color: 'rgba(99, 102, 241, 0.3)' },
      { y: 200, length: 0.015, amplitude: 100, frequency: 0.015, phase: 90, speed: 0.015, color: 'rgba(168, 85, 247, 0.25)' },
      { y: 300, length: 0.012, amplitude: 90, frequency: 0.012, phase: 180, speed: 0.018, color: 'rgba(139, 92, 246, 0.2)' },
      { y: 400, length: 0.008, amplitude: 70, frequency: 0.008, phase: 270, speed: 0.025, color: 'rgba(236, 72, 153, 0.15)' },
    ];

    let animationFrameId: number;
    let time = 0;

    const drawWave = (wave: typeof waves[0]) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);

      for (let x = 0; x < canvas.width; x++) {
        const y = wave.y + Math.sin(x * wave.frequency + wave.phase + time * wave.speed) * wave.amplitude;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, wave.color);
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => drawWave(wave));

      time += 0.5;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Deep space gradient background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0118] via-[#0f0520] to-black z-0" />

      {/* Aurora waves canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0"
      />

      {/* Rotating geometric shapes */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute border border-indigo-500/20"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: '50%',
              top: '50%',
              marginLeft: -(100 + i * 50),
              marginTop: -(100 + i * 50),
              borderRadius: i % 2 === 0 ? '30%' : '0%',
            }}
            animate={{
              rotate: i % 2 === 0 ? [0, 360] : [360, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: {
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "linear"
              },
              scale: {
                duration: 10 + i * 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          />
        ))}
      </div>

      {/* Floating particles with trails */}
      {[...Array(80)].map((_, i) => {
        const size = Math.random() * 3 + 1;
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;
        const duration = 10 + Math.random() * 20;
        
        return (
          <motion.div
            key={`particle-${i}`}
            className="fixed rounded-full"
            style={{
              width: size,
              height: size,
              left: `${startX}%`,
              top: `${startY}%`,
              background: i % 3 === 0 
                ? 'radial-gradient(circle, rgba(99, 102, 241, 0.8), transparent)'
                : i % 3 === 1
                ? 'radial-gradient(circle, rgba(168, 85, 247, 0.8), transparent)'
                : 'radial-gradient(circle, rgba(236, 72, 153, 0.8), transparent)',
              boxShadow: `0 0 ${size * 4}px ${size}px ${
                i % 3 === 0 ? 'rgba(99, 102, 241, 0.3)' 
                : i % 3 === 1 ? 'rgba(168, 85, 247, 0.3)' 
                : 'rgba(236, 72, 153, 0.3)'
              }`
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, 0],
              opacity: [0, 1, 0.5, 1, 0],
              scale: [0, 1, 1.5, 1, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        );
      })}

      {/* Spotlight effects */}
      <motion.div
        className="fixed w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15), transparent 70%)',
          left: '10%',
          top: '20%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="fixed w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15), transparent 70%)',
          right: '10%',
          top: '50%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -80, 80, 0],
          y: [0, 80, -80, 0],
          scale: [1, 0.9, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="fixed w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12), transparent 70%)',
          left: '50%',
          bottom: '10%',
          filter: 'blur(60px)',
        }}
        animate={{
          x: [0, -100, 100, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Scanline effect */}
      <motion.div
        className="fixed left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"
        style={{ filter: 'blur(1px)' }}
        animate={{
          top: ['0%', '100%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Corner accents */}
      <motion.div
        className="fixed top-0 left-0 w-64 h-64"
        style={{
          background: 'radial-gradient(circle at top left, rgba(99, 102, 241, 0.2), transparent)',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="fixed bottom-0 right-0 w-64 h-64"
        style={{
          background: 'radial-gradient(circle at bottom right, rgba(236, 72, 153, 0.2), transparent)',
          filter: 'blur(40px)',
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </>
  );
}