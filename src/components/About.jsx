import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Compass } from 'lucide-react';

export const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "B.Tech AI Student & Ex-Intern @ Scaler",
      description: "First-year B.Tech in Artificial Intelligence student at ITS Engineering College, Greater Noida (2026–2030). Completed hands-on internships at Scaler School of Technology and actively engaged with Nexstep Network.",
      background: "url('/background-section1.png')",
      backgroundPosition: "top center",
      tag: "Academic & Industry",
    },
    {
      title: "Python for ML & Prompt Engineering",
      description: "Dedicated to exploring how AI systems work and where they can break. Specializing in Python for machine learning, model testing, and precision prompt engineering to build smart, data-driven solutions.",
      background: "url('/background-section2.png')",
      backgroundPosition: "center",
      tag: "AI & ML Core",
    },
    {
      title: "Cybersecurity & Building the future",
      description: "Combining low-level C programming with cybersecurity and ethical hacking principles. Learning by building and testing ideas — whether working with models or fortifying digital systems.",
      background: "url('/background-section3.png')",
      backgroundPosition: "bottom center",
      highlight: "future",
      tag: "Security Vision",
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const current = cards[activeIndex];

  return (
    <section id="about" className="py-16 sm:py-24 bg-card/40 border-y border-border/40 relative">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-8 sm:mb-12">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold mr-2">
              02
            </span>
            <span>About</span>
          </div>
          <h2 className="section-title text-foreground mb-3">
            My Journey & Background
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Tap the card to explore my profile ({activeIndex + 1} of {cards.length})
          </p>
        </div>

        {/* Interactive 3D Perspective Card Container */}
        <div className="relative max-w-4xl mx-auto perspective-1000">
          <div
            onClick={handleNext}
            className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[460px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-500 hover:shadow-orange-500/10 hover:border-primary/50 border border-border group"
            style={{
              backgroundImage: current.background,
              backgroundSize: 'cover',
              backgroundPosition: current.backgroundPosition,
            }}
          >
            {/* Dark gradient overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 z-10" />

            {/* Top Tag Pill */}
            <div className="absolute top-6 right-6 z-20">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                <Compass className="w-3.5 h-3.5" />
                {current.tag}
              </span>
            </div>

            {/* Bottom Content Area */}
            <div className="absolute inset-0 z-20 p-6 sm:p-10 md:p-12 flex flex-col justify-end max-w-2xl">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-display text-white font-bold leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-200">
                {current.highlight ? (
                  <>
                    {current.title.split(current.highlight)[0]}
                    <span className="text-[#FE5C02]">{current.highlight}</span>
                    {current.title.split(current.highlight)[1]}
                  </>
                ) : (
                  current.title
                )}
              </h3>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Card Pagination indicators */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex space-x-2">
                  {cards.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveIndex(idx);
                      }}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeIndex ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                    aria-label="Previous card"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
                    aria-label="Next card"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
