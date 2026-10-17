import React, { useState, useEffect } from 'react';

export const ParallaxBackground = ({ children, className = '' }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      setCoords({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dynamic Mouse Following Radial Lights */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute inset-0 opacity-40 dark:opacity-20"
          style={{
            background: `radial-gradient(
              circle at ${50 + coords.x * 12}% ${50 + coords.y * 12}%,
              hsl(var(--primary) / 0.15) 0%,
              transparent 55%
            )`,
            transform: `translate(${coords.x * 15}px, ${coords.y * 15}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div
          className="absolute inset-0 opacity-25 dark:opacity-15"
          style={{
            background: `radial-gradient(
              circle at ${50 - coords.x * 15}% ${50 - coords.y * 15}%,
              hsl(var(--primary) / 0.08) 0%,
              transparent 70%
            )`,
            transform: `translate(${coords.x * -8}px, ${coords.y * -8}px)`,
            transition: 'transform 0.15s ease-out',
          }}
        />
        {/* Ambient floating accent dots */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-primary/20 dark:bg-primary/30 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              transform: `translate(${coords.x * (6 + i * 2)}px, ${coords.y * (4 + i)}px)`,
              transition: 'transform 0.2s ease-out',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
};
