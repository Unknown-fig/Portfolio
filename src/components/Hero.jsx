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
  Sparkles,
  Zap
} from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

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
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: 1minus1 Brutalist Headline & Story */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7 text-left">
            
            {/* 1minus1 Style Retro Pixel Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] shadow-[0_0_15px_rgba(200,255,0,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8ff00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8ff00]" />
              </span>
              <span className="font-pixel text-[11px] tracking-widest uppercase">
                SYSTEM ONLINE // GREATER NOIDA 🇮🇳
              </span>
            </div>

            {/* Main Name & 1minus1 Display Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[0.95] uppercase">
                ENGINEERING <br />
                <span className="text-[#c8ff00] drop-shadow-[0_0_35px_rgba(200,255,0,0.4)]">
                  THE REALM
                </span> <br />
                OF AI & SYSTEMS.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#d1b8ff] font-sans leading-snug">
                Hey, I'm <span className="text-white underline decoration-[#c8ff00] decoration-4 underline-offset-4">Utsab Mukharjee</span> — First-year AI researcher, low-level C explorer, and builder.
              </p>
            </div>

            {/* Authentic Human Bio */}
            <p className="text-[#b8a9cf] text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              I deconstruct complex software to master its core mechanics. Whether digging into <strong className="text-white">pointer arithmetic in C</strong>, building <strong className="text-white">browser 3D hand-tracking air canvases</strong>, wiring <strong className="text-white">Arduino MQ-4 IoT sensors</strong>, or training neural networks—I build fast, surgical, and open-source software.
            </p>

            {/* Credential Tags */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c0336]/80 border border-[#360866] text-xs font-mono text-white/90">
                <GraduationCap className="w-3.5 h-3.5 text-[#c8ff00]" />
                B.Tech AI @ ITS Engineering (2026–2030)
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c0336]/80 border border-[#360866] text-xs font-mono text-white/90">
                <Zap className="w-3.5 h-3.5 text-[#9860ff]" />
                Ex-Intern @ Scaler School of Tech
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1c0336]/80 border border-[#360866] text-xs font-mono text-[#c8ff00]">
                <Code2 className="w-3.5 h-3.5 text-[#c8ff00]" />
                11 Open-Source Repositories
              </span>
            </div>

            {/* Magnetic 1minus1 Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <MagneticButton
                href="#projects"
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el && window.$lenis) window.$lenis.scrollTo(el, { offset: -80 });
                }}
                className="btn-1minus1 text-sm py-4 px-8"
              >
                <span>Explore Builds</span>
                <ArrowRight className="w-4 h-4 text-[#140128]" />
              </MagneticButton>

              <MagneticButton
                onClick={handleCopyEmail}
                className="btn-1minus1-outline text-sm py-4 px-6"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-[#c8ff00]" />
                    <span className="text-[#c8ff00]">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#b8a9cf]" />
                    <span>speedrunner0007@gmail.com</span>
                  </>
                )}
              </MagneticButton>
            </div>

          </div>

          {/* Right Column: 1minus1 Workbench Terminal Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-md rounded-3xl bg-[#190230]/90 border border-[#360866] p-7 shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden flex flex-col justify-between space-y-6">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2a0453]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff3366]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffb800]" />
                  <div className="w-3 h-3 rounded-full bg-[#c8ff00]" />
                  <span className="text-xs font-mono text-[#b8a9cf] ml-2">
                    utsab@1minus1-node: ~
                  </span>
                </div>
                <span className="text-[10px] font-pixel px-2.5 py-1 rounded bg-[#c8ff00]/10 text-[#c8ff00] border border-[#c8ff00]/30 font-bold uppercase">
                  ACTIVE
                </span>
              </div>

              {/* Terminal Snippet in 1minus1 Cyberpunk styling */}
              <div className="font-mono text-xs space-y-3 bg-[#140128]/90 p-5 rounded-2xl border border-[#26024a] text-left">
                <div className="text-[#9860ff]">
                  <span className="text-[#c8ff00] font-bold">❯</span> cat ~/.currently_building
                </div>
                <div className="text-white pl-3 border-l-2 border-[#c8ff00] space-y-1.5 text-[12px]">
                  <div>• <span className="font-bold text-[#c8ff00]">AirCanvas:</span> 3D gesture drawing in browser</div>
                  <div>• <span className="font-bold text-[#c8ff00]">C Systems:</span> Memory allocators & pointers</div>
                  <div>• <span className="font-bold text-[#c8ff00]">IoT Sentinel:</span> Arduino MQ-4 gas telemetry</div>
                </div>
                <div className="text-[#9860ff] pt-2">
                  <span className="text-[#c8ff00] font-bold">❯</span> echo $ENGINEERING_RULE
                </div>
                <div className="text-[#c8ff00] font-bold pl-3 border-l-2 border-[#9860ff] text-[12px]">
                  "Zero speculative bloat. Build to understand."
                </div>
              </div>

              {/* Personal System Badges */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-2xl bg-[#1c0336] border border-[#2a0453] text-left">
                  <div className="text-[11px] text-[#b8a9cf] font-pixel uppercase">Focus Area</div>
                  <div className="text-xs font-bold text-white mt-1">AI/ML & Systems</div>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#1c0336] border border-[#2a0453] text-left">
                  <div className="text-[11px] text-[#b8a9cf] font-pixel uppercase">GitHub Repo</div>
                  <a 
                    href="https://github.com/Unknown-fig" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-xs font-bold text-[#c8ff00] hover:underline mt-1 block truncate"
                  >
                    @Unknown-fig ↗
                  </a>
                </div>
              </div>

              {/* Interactive Chai Easter Egg */}
              <div 
                onClick={handleChaiClick}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#26024a]/60 border border-[#9860ff]/30 cursor-pointer hover:border-[#c8ff00]/60 hover:bg-[#26024a] transition-all select-none group"
                title="Click to add another cup of chai to the counter!"
              >
                <div className="flex items-center gap-2.5 text-xs text-[#d1b8ff] font-medium">
                  <Coffee className="w-4 h-4 text-[#c8ff00] group-hover:rotate-12 transition-transform" />
                  <span>Fueled by hot chai & curiosity</span>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-[#c8ff00] text-[#140128] font-black tnum shadow-[0_0_10px_rgba(200,255,0,0.3)]">
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
