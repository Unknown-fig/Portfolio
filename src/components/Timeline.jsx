import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { Baby, Code, BookOpen, Building, Award, GraduationCap, Briefcase, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { SplitTextReveal } from './ui/SplitTextReveal';
import { soundEngine } from '../utils/soundEngine';

const iconMap = {
  Baby,
  Code,
  BookOpen,
  Building,
  Award,
  GraduationCap,
  Briefcase,
};

export const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(timelineData.length - 1); // Start with latest

  const handleNext = () => {
    soundEngine.playSwitch();
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const handlePrev = () => {
    soundEngine.playSwitch();
    setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  const activeMilestone = timelineData[activeIndex];
  const IconComponent = iconMap[activeMilestone.iconName] || Code;

  return (
    <section id="timeline" className="py-20 sm:py-28 bg-[#180230]/70 border-y border-[#26024a] relative overflow-hidden">
      {/* Blueprint Crosshairs & Coordinate Tags */}
      <div className="tech-crosshair top-6 left-6">+ [SYS:04 // TRAJECTORY]</div>
      <div className="tech-crosshair top-6 right-6">+ [CHRONOLOGY // TURNING_POINTS]</div>

      <div className="section-container relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Calendar className="w-3.5 h-3.5" />
            <span>CHRONOLOGY // TURNING POINTS</span>
          </div>
          <h2 className="section-title text-white mb-4 uppercase">
            <SplitTextReveal mode="words">DEVELOPER</SplitTextReveal>{' '}
            <span className="text-[#c8ff00]">
              <SplitTextReveal mode="words" delay={0.12}>TRAJECTORY</SplitTextReveal>
            </span>
          </h2>
          <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl text-left font-normal">
            From discovering HTML tags at age 9 to building systems in C, Python, and modern web frameworks.
          </p>
        </div>

        {/* Featured Milestone Card with SpotlightCard */}
        <div className="max-w-4xl mx-auto mb-14">
          <SpotlightCard className="p-8 sm:p-12 shadow-[0_0_50px_rgba(0,0,0,0.6)] text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#2a0453]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#c8ff00] text-[#140128] flex items-center justify-center shadow-[0_0_20px_rgba(200,255,0,0.3)]">
                  <IconComponent className="w-8 h-8" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#26024a] text-[#c8ff00] text-xs font-pixel font-bold uppercase tracking-wider mb-2 border border-[#9860ff]/30">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeMilestone.date}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase tracking-tight">
                    {activeMilestone.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-[#b8a9cf]">
                <div className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#c8ff00]" />
                  <span className="font-semibold text-white">{activeMilestone.organization}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#c8ff00]" />
                  <span>{activeMilestone.location}</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-[#d1b8ff] text-base sm:text-lg leading-relaxed font-normal">
                {activeMilestone.description}
              </p>

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#2a0453]">
                <span className="text-xs font-pixel text-[#9860ff] uppercase">
                  MILESTONE [ 0{activeIndex + 1} / 0{timelineData.length} ]
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePrev}
                    onMouseEnter={() => soundEngine.playHover()}
                    className="p-3 rounded-full border border-[#9860ff]/40 bg-[#1c0336] hover:border-[#c8ff00] hover:text-[#c8ff00] text-white transition-colors"
                    aria-label="Previous milestone"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    onMouseEnter={() => soundEngine.playHover()}
                    className="p-3 rounded-full border border-[#9860ff]/40 bg-[#1c0336] hover:border-[#c8ff00] hover:text-[#c8ff00] text-white transition-colors"
                    aria-label="Next milestone"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Milestone Horizontal Track */}
        <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#360866] -translate-y-1/2 z-0" />
            {timelineData.map((item, idx) => {
              const ItemIcon = iconMap[item.iconName] || Code;
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => soundEngine.playHover()}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setActiveIndex(idx);
                  }}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-200 ${
                    isActive ? "scale-115" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-[#c8ff00] border-[#c8ff00] text-[#140128] shadow-[0_0_20px_rgba(200,255,0,0.4)]"
                        : "bg-[#140128] border-[#360866] text-[#b8a9cf] group-hover:border-[#c8ff00]"
                    }`}
                  >
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <span className={`text-xs font-bold mt-2 font-mono ${isActive ? "text-[#c8ff00]" : "text-[#b8a9cf]"}`}>
                    {item.date.split(' ')[0]}
                  </span>
                  <span className="text-[11px] font-medium text-white/80 max-w-[90px] text-center truncate">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
