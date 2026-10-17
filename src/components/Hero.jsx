import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  GraduationCap, 
  MapPin, 
  Copy, 
  Check, 
  Code2, 
  Coffee, 
  Flame, 
  Sparkles 
} from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [chaiCount, setChaiCount] = useState(42);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('speedrunner0007@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleChaiClick = () => {
    setChaiCount((prev) => prev + 1);
  };

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Personal Human Story & Intro */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-specular border border-border/70 text-xs font-medium text-foreground shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-foreground">Available for Collaborations</span>
              <span className="text-muted-foreground/60">•</span>
              <span className="text-muted-foreground flex items-center gap-1">
                <MapPin className="w-3 h-3 text-primary" />
                Greater Noida, India
              </span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight leading-[1.1]">
                Hey, I'm <span className="text-primary underline decoration-primary/30 decoration-wavy decoration-2">Utsab Mukharjee</span> 👋
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-foreground/90 leading-snug">
                First-year AI student, low-level C explorer, and pragmatic builder.
              </p>
            </div>

            {/* Authentic Human Bio */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
              I love taking complex systems apart to understand how they work under the hood. 
              Whether that's diving into <strong className="text-foreground">pointer arithmetic in C</strong>, wiring up <strong className="text-foreground">Arduino gas sensors for IoT</strong>, crafting <strong className="text-foreground">3D hand-tracking air canvases</strong>, or stress-testing AI models—I learn best by breaking, building, and shipping open-source software.
            </p>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-card border border-border/80 text-xs font-medium text-foreground shadow-sm">
                <GraduationCap className="w-3.5 h-3.5 text-primary" />
                B.Tech AI @ ITS Engineering College (2026–2030)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-card border border-border/80 text-xs font-medium text-foreground shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Ex-Intern @ Scaler School of Technology
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-card border border-border/80 text-xs font-medium text-foreground shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-blue-500" />
                11 Open-Source Repositories
              </span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.97]"
              >
                <span>See My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Button
                variant="outline"
                size="default"
                onClick={handleCopyEmail}
                className="gap-2 px-5 py-3.5 h-auto text-sm border-border bg-card/80 hover:bg-accent text-foreground"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-muted-foreground" />
                    <span>speedrunner0007@gmail.com</span>
                  </>
                )}
              </Button>

              <a
                href="#contact"
                className="px-4 py-3.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Get in touch →
              </a>
            </div>

          </div>

          {/* Right Column: Authentic "Now & Workbench" Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md rounded-3xl glass-specular border border-border/80 p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-5">
              
              {/* Card Header with Terminal Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-muted-foreground ml-2">
                    utsab@developer-desk: ~
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-primary/10 text-primary font-semibold">
                  bash
                </span>
              </div>

              {/* Terminal Snippet */}
              <div className="font-mono text-xs space-y-2.5 bg-muted/40 p-4 rounded-2xl border border-border/50 text-left">
                <div className="text-muted-foreground">
                  <span className="text-primary font-bold">$</span> cat ~/.currently_building
                </div>
                <div className="text-foreground pl-3 border-l-2 border-primary/50 space-y-1">
                  <div>• <span className="font-semibold text-foreground">AirCanvas:</span> 3D gesture tracking in browser</div>
                  <div>• <span className="font-semibold text-foreground">C Systems:</span> Memory allocators & pointers</div>
                  <div>• <span className="font-semibold text-foreground">IoT Sentinel:</span> Arduino MQ-4 gas telemetry</div>
                </div>
                <div className="text-muted-foreground pt-1">
                  <span className="text-primary font-bold">$</span> echo $ENGINEERING_RULE
                </div>
                <div className="text-primary font-semibold pl-3 border-l-2 border-primary/50 text-[11px]">
                  "Zero speculative bloat. Build to understand."
                </div>
              </div>

              {/* Personal Human Badges */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="p-3 rounded-xl bg-card/60 border border-border/60 text-left">
                  <div className="text-[11px] text-muted-foreground font-medium">Focus Area</div>
                  <div className="text-xs font-bold text-foreground mt-0.5">AI/ML & Systems</div>
                </div>
                <div className="p-3 rounded-xl bg-card/60 border border-border/60 text-left">
                  <div className="text-[11px] text-muted-foreground font-medium">GitHub</div>
                  <a 
                    href="https://github.com/Unknown-fig" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-primary hover:underline mt-0.5 block truncate"
                  >
                    @Unknown-fig ↗
                  </a>
                </div>
              </div>

              {/* Interactive Chai Easter Egg */}
              <div 
                onClick={handleChaiClick}
                className="flex items-center justify-between p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 cursor-pointer hover:bg-amber-500/15 transition-all select-none group"
                title="Click to add another cup of chai to the counter!"
              >
                <div className="flex items-center gap-2.5 text-xs text-amber-700 dark:text-amber-300 font-medium">
                  <Coffee className="w-4 h-4 text-amber-500 group-hover:rotate-12 transition-transform" />
                  <span>Fueled by hot chai & curiosity</span>
                </div>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 tnum">
                  {chaiCount} cups ☕
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
