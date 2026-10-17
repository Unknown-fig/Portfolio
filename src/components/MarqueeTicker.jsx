import React from 'react';

export const MarqueeTicker = ({
  items = [
    "ARTIFICIAL INTELLIGENCE",
    "LOW-LEVEL C SYSTEMS",
    "3D COMPUTER VISION",
    "HIGH-PERFORMANCE ARCHITECTURE",
    "FULL-STACK WEB",
    "EMBEDDED IOT FIRMWARE",
    "OPEN SOURCE CRAFT",
  ],
  direction = "left",
  speed = "fast",
  className = "",
}) => {
  const repeatedItems = [...items, ...items, ...items, ...items];

  const durationClass = speed === "fast" ? "animate-marquee-fast" : "animate-marquee";
  const animDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div className={`relative w-full overflow-hidden py-3 bg-[#17022d] border-y border-[#360866] select-none ${className}`}>
      {/* Edge Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#140128] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#140128] to-transparent z-10" />

      {/* Infinite Scrolling Track */}
      <div 
        className="flex whitespace-nowrap will-change-transform hover:[animation-play-state:paused]"
        style={{
          display: 'flex',
          width: 'max-content',
          animation: `marquee 25s linear infinite ${animDirection}`,
        }}
      >
        {repeatedItems.map((item, idx) => {
          const isOdd = idx % 2 === 1;
          return (
            <div key={idx} className="flex items-center gap-6 px-4">
              <span
                className={`text-sm sm:text-base font-display font-black tracking-widest uppercase transition-colors ${
                  isOdd
                    ? "text-[#c8ff00] drop-shadow-[0_0_12px_rgba(200,255,0,0.4)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item}
              </span>
              <span className="text-[#9860ff] font-pixel text-xs opacity-75">
                ✦
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
