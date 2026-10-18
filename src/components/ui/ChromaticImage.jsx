import React, { useRef, useState } from 'react';

/**
 * ChromaticImage - 1minus1 Interactive RGB Chromatic Aberration & Glitch Wave Hover
 * Generates an interactive RGB split and displacement effect on mouse hover.
 */
export const ChromaticImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  intensity = 5,
  onClick,
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const xRatio = (e.clientX - rect.left) / rect.width - 0.5;
    const yRatio = (e.clientY - rect.top) / rect.height - 0.5;

    setOffset({
      x: xRatio * intensity,
      y: yRatio * intensity,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setOffset({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      {/* Base Image */}
      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-500 will-change-transform ${
          isHovered ? 'scale-105' : 'scale-100'
        } ${className}`}
        loading="lazy"
      />

      {/* Red Channel Aberration Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70 transition-transform duration-150 ease-out will-change-transform overflow-hidden"
          style={{
            transform: `translate3d(${offset.x * 1.5 - 3}px, ${offset.y * 1.2}px, 0) scale(1.05)`,
            filter: 'drop-shadow(2px 0 0 rgba(255, 0, 70, 0.8)) brightness(1.2)',
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Cyan/Blue Channel Aberration Layer */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 mix-blend-screen opacity-70 transition-transform duration-150 ease-out will-change-transform overflow-hidden"
          style={{
            transform: `translate3d(${offset.x * -1.5 + 3}px, ${offset.y * -1.2}px, 0) scale(1.05)`,
            filter: 'drop-shadow(-2px 0 0 rgba(0, 240, 255, 0.8)) brightness(1.2)',
          }}
        >
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            aria-hidden="true"
          />
        </div>
      )}

      {/* High-Tech CRT Scanline / Wave Sheen Overlay */}
      <div 
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
          isHovered ? 'opacity-25' : 'opacity-0'
        }`}
        style={{
          backgroundImage: 'linear-gradient(rgba(200, 255, 0, 0.1) 50%, transparent 50%)',
          backgroundSize: '100% 4px',
        }}
      />
    </div>
  );
};
