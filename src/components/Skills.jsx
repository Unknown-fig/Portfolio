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
import { Card, CardContent } from './ui/Card';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages & Systems' },
    { id: 'web', label: 'Web & 3D Graphics' },
    { id: 'hardware', label: 'Hardware & IoT' },
  ];

  const tools = [
    {
      name: "C Language & Memory",
      category: "languages",
      highlight: "Pointers & Primitives",
      note: "Manual memory allocation, struct alignment, pointers, and understanding how hardware executes code without runtime overhead.",
      tag: "Systems",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-500",
    },
    {
      name: "Python for ML & Scraping",
      category: "languages",
      highlight: "Rapid Prototyping",
      note: "Data manipulation with Pandas, FastAPI backends, asynchronous Playwright web scrapers, and machine learning fundamentals.",
      tag: "Data & ML",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-500",
    },
    {
      name: "JavaScript & TypeScript",
      category: "languages",
      highlight: "Modern Web",
      note: "React state management, Next.js App Router, asynchronous promises, and type-safe component design.",
      tag: "Full Stack",
      color: "border-yellow-500/30 bg-yellow-500/5 text-yellow-500",
    },
    {
      name: "Three.js & WebGL",
      category: "web",
      highlight: "3D Spatial Graphics",
      note: "Rendering 3D ribbon strokes, camera matrices, perspective views, and interactive WebGL canvas scenes in AirCanvas.",
      tag: "Creative Tech",
      color: "border-purple-500/30 bg-purple-500/5 text-purple-500",
    },
    {
      name: "MediaPipe Computer Vision",
      category: "web",
      highlight: "Hand Landmarking",
      note: "Real-time webcam hand tracking, multi-point landmark detection, and calibrating pinch gesture triggers with sub-15ms latency.",
      tag: "Vision AI",
      color: "border-cyan-500/30 bg-cyan-500/5 text-cyan-500",
    },
    {
      name: "React 18, Vite & Tailwind",
      category: "web",
      highlight: "High-Speed SPAs",
      note: "Building responsive, accessible web interfaces with glassmorphism, spring physics animations, and modular components.",
      tag: "UI Architecture",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-500",
    },
    {
      name: "Arduino & Microcontrollers",
      category: "hardware",
      highlight: "Firmware Loops",
      note: "Writing embedded C/C++ firmware, polling analog gas sensor voltages, and serial communication to host machines.",
      tag: "Embedded",
      color: "border-teal-500/30 bg-teal-500/5 text-teal-500",
    },
    {
      name: "MQ-4 / MQ-2 Gas Sensors",
      category: "hardware",
      highlight: "Sensor Transducers",
      note: "Calibrating baseline resistance, PPM calculation for hazardous methane/LPG detection, and hardware trigger logic.",
      tag: "IoT Hardware",
      color: "border-rose-500/30 bg-rose-500/5 text-rose-500",
    },
    {
      name: "MQTT & WebSockets",
      category: "hardware",
      highlight: "Real-Time Telemetry",
      note: "Streaming low-latency sensor telemetry from Python hardware bridges to live browser dashboards.",
      tag: "Protocols",
      color: "border-indigo-500/30 bg-indigo-500/5 text-indigo-500",
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
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-specular border border-border/70 text-xs font-semibold text-primary mb-4 shadow-sm">
            <Code2 className="w-3.5 h-3.5" />
            <span>Developer Toolbox & Tech Stack</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            Technologies I Actually Build With
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            No arbitrary percentage bars. Here is the actual toolkit I use to write low-level systems, build full-stack web applications, wire up IoT microcontrollers, and experiment with computer vision.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-150 spring-press select-none border ${
                  activeTab === cat.id
                    ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]"
                    : "glass-specular text-muted-foreground border-border/80 hover:text-foreground hover:border-primary/40"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 text-left">
          {filteredTools.map((tool) => (
            <Card 
              key={tool.name} 
              className="glass-specular p-5 border-border/60 hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 rounded-2xl transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <h3 className="font-bold text-foreground text-base">
                    {tool.name}
                  </h3>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border font-semibold ${tool.color}`}>
                    {tool.tag}
                  </span>
                </div>
                <div className="text-xs font-semibold text-primary mb-2">
                  {tool.highlight}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {tool.note}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Engineering Philosophy Ribbon */}
        <div className="p-6 sm:p-8 rounded-3xl glass-specular border border-border/70 shadow-lg text-left">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary mb-4">
            <Compass className="w-4 h-4" />
            <span>Engineering Principles I Build By</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineeringPrinciples.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div key={idx} className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-foreground text-base">
                    {principle.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
