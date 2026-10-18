import React, { useState } from 'react';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Terminal, 
  Radio, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { SplitTextReveal } from './ui/SplitTextReveal';
import { soundEngine } from '../utils/soundEngine';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Stack' },
    { id: 'languages', label: 'Languages & Systems' },
    { id: 'web', label: 'Web & 3D Graphics' },
    { id: 'hardware', label: 'Hardware & IoT' },
  ];

  const tools = [
    {
      name: "C Language & Memory",
      category: "languages",
      highlight: "Pointers & Memory Layout",
      note: "Manual memory allocation, struct alignment, pointers, and understanding how hardware executes code without runtime overhead.",
      tag: "SYSTEMS",
      color: "border-[#9860ff]/40 bg-[#9860ff]/10 text-[#c8ff00]",
    },
    {
      name: "Python for ML & Scraping",
      category: "languages",
      highlight: "Rapid Architecture",
      note: "Data manipulation with Pandas, FastAPI backends, asynchronous Playwright web scrapers, and neural network fundamentals.",
      tag: "DATA & ML",
      color: "border-[#c8ff00]/40 bg-[#c8ff00]/10 text-[#c8ff00]",
    },
    {
      name: "JavaScript & TypeScript",
      category: "languages",
      highlight: "Full-Stack Web",
      note: "React state management, Next.js App Router, asynchronous concurrency, and type-safe component design.",
      tag: "FULL STACK",
      color: "border-[#9860ff]/40 bg-[#9860ff]/10 text-[#9860ff]",
    },
    {
      name: "Three.js & WebGL",
      category: "web",
      highlight: "3D Spatial Graphics",
      note: "Rendering 3D ribbon strokes, camera matrices, perspective views, and interactive WebGL canvas scenes in AirCanvas.",
      tag: "CREATIVE 3D",
      color: "border-[#c8ff00]/40 bg-[#c8ff00]/10 text-[#c8ff00]",
    },
    {
      name: "MediaPipe Vision AI",
      category: "web",
      highlight: "Hand Landmarking",
      note: "Real-time webcam hand tracking, multi-point landmark detection, and calibrating pinch gesture triggers with sub-15ms latency.",
      tag: "VISION AI",
      color: "border-[#9860ff]/40 bg-[#9860ff]/10 text-[#9860ff]",
    },
    {
      name: "React 18 & Tailwind",
      category: "web",
      highlight: "High-Speed SPAs",
      note: "Building responsive, accessible web interfaces with glassmorphism, spring physics animations, and modular components.",
      tag: "UI ARCHITECTURE",
      color: "border-[#c8ff00]/40 bg-[#c8ff00]/10 text-[#c8ff00]",
    },
    {
      name: "Arduino Microcontrollers",
      category: "hardware",
      highlight: "Firmware Loops",
      note: "Writing embedded C/C++ firmware, polling analog gas sensor voltages, and serial communication to host machines.",
      tag: "EMBEDDED",
      color: "border-[#9860ff]/40 bg-[#9860ff]/10 text-[#9860ff]",
    },
    {
      name: "MQ-4 / MQ-2 Sensors",
      category: "hardware",
      highlight: "Gas Transducers",
      note: "Calibrating baseline resistance, PPM calculation for hazardous methane/LPG detection, and hardware trigger logic.",
      tag: "IOT HARDWARE",
      color: "border-[#c8ff00]/40 bg-[#c8ff00]/10 text-[#c8ff00]",
    },
    {
      name: "MQTT & WebSockets",
      category: "hardware",
      highlight: "Real-Time Telemetry",
      note: "Streaming low-latency sensor telemetry from Python hardware bridges to live browser dashboards.",
      tag: "PROTOCOLS",
      color: "border-[#9860ff]/40 bg-[#9860ff]/10 text-[#c8ff00]",
    },
  ];

  const filteredTools = activeTab === 'all' 
    ? tools 
    : tools.filter(t => t.category === activeTab);

  const engineeringPrinciples = [
    {
      icon: Terminal,
      title: "Build to Understand",
      description: "The best way to truly grasp an algorithm (like Dijkstra routing, WebGL shaders, or memory buffers) is to implement it from raw primitives rather than relying on black-box wrappers.",
    },
    {
      icon: ShieldCheck,
      title: "Surgical & Minimal Bloat",
      description: "Code should be clean, intentional, and readable. Avoid premature abstractions and bloated external dependencies when a simple, focused solution solves the problem.",
    },
    {
      icon: Radio,
      title: "Physical Meets Digital",
      description: "Writing web software is rewarding, but software that triggers a physical siren, reads an analog gas sensor, or tracks a physical hand gesture in mid-air feels like real-world magic.",
    },
  ];

  return (
    <section id="skills" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Blueprint Crosshairs & Coordinate Tags */}
      <div className="tech-crosshair top-6 left-6">+ [SYS:02 // TECH_MATRIX]</div>
      <div className="tech-crosshair top-6 right-6">+ [STACK // ACTIVE_ARSENAL]</div>

      <div className="section-container relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Code2 className="w-3.5 h-3.5" />
            <span>DEVELOPER TOOLBOX // WEAPONS OF CHOICE</span>
          </div>
          <h2 className="section-title text-white mb-4 uppercase">
            <SplitTextReveal mode="words">TECHNOLOGIES I</SplitTextReveal>{' '}
            <span className="text-[#c8ff00]">
              <SplitTextReveal mode="words" delay={0.12}>COMMAND</SplitTextReveal>
            </span>
          </h2>
          <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl font-normal">
            No arbitrary percentage bars. Here is the actual toolkit I use to write low-level systems, build full-stack web applications, wire up IoT microcontrollers, and experiment with computer vision.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2.5 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onMouseEnter={() => soundEngine.playHover()}
                onClick={() => {
                  soundEngine.playSwitch();
                  setActiveTab(cat.id);
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 select-none border ${
                  activeTab === cat.id
                    ? "bg-[#c8ff00] text-[#140128] border-[#c8ff00] shadow-[0_0_20px_rgba(200,255,0,0.3)] scale-[1.02]"
                    : "bg-[#1c0336]/80 text-[#b8a9cf] border-[#360866] hover:text-white hover:border-[#9860ff]/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Cards Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 text-left">
          {filteredTools.map((tool) => (
            <SpotlightCard 
              key={tool.name} 
              onMouseEnter={() => soundEngine.playHover()}
              className="p-6 transition-all duration-300 group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-white text-lg group-hover:text-[#c8ff00] transition-colors">
                    {tool.name}
                  </h3>
                  <span className={`text-[10px] font-pixel px-2.5 py-1 rounded-full border font-bold uppercase ${tool.color}`}>
                    {tool.tag}
                  </span>
                </div>
                <div className="text-xs font-mono font-bold text-[#c8ff00] mb-2 uppercase tracking-wide">
                  {tool.highlight}
                </div>
                <p className="text-xs text-[#b8a9cf] leading-relaxed">
                  {tool.note}
                </p>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Engineering Philosophy Ribbon with SpotlightCard */}
        <SpotlightCard className="p-8 sm:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-left">
          <div className="flex items-center gap-2.5 text-xs font-pixel font-bold uppercase tracking-wider text-[#c8ff00] mb-6">
            <Compass className="w-4 h-4" />
            <span>ENGINEERING PRINCIPLES I BUILD BY</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engineeringPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center border border-[#c8ff00]/20 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-black text-white text-xl uppercase tracking-tight">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#b8a9cf] leading-relaxed font-normal">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
};
