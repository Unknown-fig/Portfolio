import React, { useRef, useState } from 'react';

/**
 * SpotlightCard - 1minus1 Specular Glare + 3D Spring Tilt Physics
 * Projects mouse-tracking specular highlights, border illumination, and 3D perspective tilt.
 */
export const SpotlightCard = ({
  children,
  className = "",
  spotlightColor = "rgba(200, 255, 0, 0.12)",
  borderColor = "rgba(200, 255, 0, 0.4)",
  tilt = true,
  maxTilt = 4, // Max tilt degrees
  onClick,
  ...props
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tiltRotation, setTiltRotation] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    setPosition({ x: posX, y: posY });

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((posY - centerY) / centerY) * -maxTilt;
      const rotateY = ((posX - centerX) / centerX) * maxTilt;
      setTiltRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setTiltRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tilt
          ? `perspective(1000px) rotateX(${tiltRotation.x}deg) rotateY(${tiltRotation.y}deg)`
          : undefined,
        transformStyle: 'preserve-3d',
      }}
      className={`relative rounded-3xl border border-[#360866] bg-[#190230]/85 overflow-hidden transition-all duration-300 will-change-transform ${className}`}
      {...props}
    >
      {/* Dynamic Specular Spotlight Sheen */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-3xl z-0"
        style={{
          opacity,
          background: `radial-gradient(450px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Dynamic Cursor-Tracking Border Glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300 z-10"
        style={{
          opacity,
          boxShadow: `inset 0 0 0 1px ${borderColor}`,
          maskImage: `radial-gradient(280px circle at ${position.x}px ${position.y}px, black, transparent 70%)`,
          WebkitMaskImage: `radial-gradient(280px circle at ${position.x}px ${position.y}px, black, transparent 70%)`,
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};
