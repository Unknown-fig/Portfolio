import React, { useState, useEffect } from 'react';

export const AtmosphericBackground = ({ children, className = '' }) => {
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
    <div className={`relative min-h-screen bg-[#140128] text-white overflow-hidden ${className}`}>
      {/* 1minus1 Ambient Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep Electric Purple Radial Glow */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #9860ff 0%, #26024a 60%, transparent 80%)',
            left: `${35 + coords.x * 8}%`,
            top: `${20 + coords.y * 8}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'left 0.4s ease-out, top 0.4s ease-out',
          }}
        />

        {/* High-Voltage Neon Lime Atmospheric Orb */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[160px] opacity-15"
          style={{
            background: 'radial-gradient(circle, #c8ff00 0%, #140128 70%, transparent 80%)',
            right: `${20 - coords.x * 10}%`,
            top: `${45 - coords.y * 10}%`,
            transform: 'translate(50%, -50%)',
            transition: 'right 0.5s ease-out, top 0.5s ease-out',
          }}
        />

        {/* Ambient Subtle Grid (1minus1 Cybernetic Coordinate System) */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(152, 96, 255, 0.4) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(152, 96, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Procedural Film Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-screen"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content Tree */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
