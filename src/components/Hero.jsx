import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Sparkles, Terminal, GraduationCap } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const container = containerRef.current;
    const card = cardRef.current;
    if (!container || !card) return;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const dx = (e.clientX - left) / width - 0.5;
      const dy = (e.clientY - top) / height - 0.5;
      card.style.transform = `perspective(1000px) rotateY(${dx * 6}deg) rotateX(${-dy * 6}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMobile]);

  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Text */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* 01 Portfolio Tag */}
            <div className="pulse-chip opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold mr-2">
                01
              </span>
              <span>Portfolio</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3 opacity-0 animate-fade-in" style={{ animationDelay: '0.25s' }}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wide mb-1 border border-primary/20">
                <Sparkles className="w-3.5 h-3.5 text-primary shrink-0" />
                <span>AI/ML Enthusiast | Python & Machine Learning | Ex-Intern @ Scaler School of Technology | Cybersecurity & Prompt Engineering</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.1]">
                Utsab Mukharjee
              </h1>
              <p className="text-primary font-medium text-base sm:text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 shrink-0" />
                B.Tech in Artificial Intelligence (August 2026 – August 2030) • ITS Engineering College, Greater Noida
              </p>
            </div>

            {/* Subheadline & Bio from LinkedIn (Verbatim) */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl opacity-0 animate-fade-in text-left" style={{ animationDelay: '0.4s' }}>
              I’m a first-year engineering student, and I spend a lot of time exploring how AI systems work and where they can break. My focus is on <strong className="text-foreground">Python for ML</strong>, <strong className="text-foreground">machine learning fundamentals</strong>, and <strong className="text-foreground">prompt engineering</strong>, with a growing interest in <strong className="text-foreground">cybersecurity and ethical hacking</strong>. I’ve also completed an internship at <strong className="text-foreground">Scaler School of Technology</strong> and stay involved as a member of <strong className="text-foreground">Nexstep Network</strong>. I like learning by building and testing ideas, whether that means working with models, studying security basics, or figuring out how to ask better questions of AI tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 w-full sm:w-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.55s' }}>
              <a
                href="#about"
                className="inline-flex items-center justify-center group text-center transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 font-semibold text-white px-7 py-3.5 rounded-full shadow-lg"
                style={{ backgroundColor: '#FE5C02' }}
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-foreground hover:bg-accent transition-colors font-medium text-sm"
              >
                <Terminal className="w-4 h-4 mr-2 text-primary" />
                Connect with Me
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Futuristic Stage */}
          <div className="lg:col-span-5 flex justify-center" ref={containerRef}>
            <div
              ref={cardRef}
              className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-border/60 bg-gradient-to-br from-card to-muted/40 transition-transform duration-150 ease-out flex items-center justify-center"
              style={{
                backgroundImage: 'url(/Header-background.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Overlay glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />

              {/* Character Avatar */}
              <img
                src="/robot-hero.png"
                alt="Futuristic Robot Cyberpunk Graphic"
                className="relative z-10 w-4/5 max-h-[85%] object-contain drop-shadow-[0_20px_40px_rgba(254,92,2,0.3)] transition-transform duration-300 hover:scale-105"
                loading="eager"
              />

              {/* Status Badge floating at bottom */}
              <div className="absolute bottom-6 left-6 right-6 z-20 bg-background/85 backdrop-blur-md border border-border/80 rounded-2xl p-4 shadow-lg flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Current Program</div>
                  <div className="text-sm font-bold text-foreground">B.Tech Artificial Intelligence</div>
                  <div className="text-[11px] text-primary">ITS Engineering College, Greater Noida</div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
