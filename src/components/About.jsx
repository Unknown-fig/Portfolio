import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Cpu, 
  Heart, 
  Code, 
  Headphones, 
  Coffee, 
  BookOpen, 
  ArrowRight,
  Lightbulb,
  ShieldCheck
} from 'lucide-react';

export const About = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stories = [
    {
      title: "The Spark: Inspecting Elements at Age 9",
      tag: "Origins // Genesis",
      content: "I still remember the adrenaline of pressing F12 in a browser for the first time as a kid, altering a website's headline, and realizing software wasn't closed magic—it was written by people, and I could build it too. What started as childhood curiosity with raw HTML tags evolved into building high-throughput web architectures and low-level system software.",
      quote: "Curiosity is the best debugger.",
    },
    {
      title: "Why Low-Level & C Language?",
      tag: "Core // Systems",
      content: "While many developers rush exclusively to high-level frameworks and API wrappers, I wanted to understand memory addresses, pointers, struct padding, and how CPUs actually execute instructions. Diving into C gave me deep respect for hardware efficiency and made every higher-level language feel completely transparent.",
      quote: "If you master memory and pointers, no framework will ever scare you.",
    },
    {
      title: "Scaler School of Technology Crucible",
      tag: "Mentorship // Rigour",
      content: "Completing competitive internships across multiple cohorts at Scaler School of Technology shaped how I think as an engineer. Working with senior industry mentors pushed me past 'code that just works' toward engineering rigor: clean architecture, edge-case validation, code reviews, and designing systems that scale.",
      quote: "Great software is written for humans to read, and computers to execute.",
    },
    {
      title: "The Maker's Itch: Building Real Things",
      tag: "Craft // Open Source",
      content: "I don't just write scripts for classroom assignments—I build software I personally want to use every day: a 3D hand-gesture air canvas so anyone can sculpt in mid-air, an IoT gas leak detection pipeline to keep lab environments safe, and a self-hosted audio streaming server with synchronized lyrics.",
      quote: "Build what you wish existed.",
    },
  ];

  const quickFacts = [
    { icon: Terminal, label: "Daily Tools", value: "Neovim, VS Code, Git, Linux Terminal" },
    { icon: Headphones, label: "Soundtrack", value: "Lo-Fi Instrumental & Synthwave" },
    { icon: Coffee, label: "Daily Fuel", value: "Hot Chai & Curiosity" },
    { icon: BookOpen, label: "Reading Now", value: "OS Architecture & Distributed Systems" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#180230]/70 border-y border-[#26024a] relative">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ORIGINS & THE STORY // ARCHIVES</span>
          </div>
          <h2 className="section-title text-white mb-4 uppercase">
            BEHIND THE <span className="text-[#c8ff00]">SCREEN</span>
          </h2>
          <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl font-normal">
            Beyond the resume bullet points: how I got into software, why I care about low-level systems, and what keeps me building late at night.
          </p>
        </div>

        {/* Interactive Story Tabs + Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left">
          
          {/* Left: Story Selection Pills */}
          <div className="lg:col-span-5 flex flex-col space-y-3">
            {stories.map((story, idx) => {
              const isSelected = activeStoryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-[#c8ff00] text-[#140128] border-[#c8ff00] shadow-[0_0_25px_rgba(200,255,0,0.3)] scale-[1.02]"
                      : "bg-[#1c0336]/80 text-[#b8a9cf] border-[#360866] hover:text-white hover:border-[#9860ff]/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-pixel uppercase font-bold tracking-wider ${isSelected ? 'text-[#140128]' : 'text-[#c8ff00]'}`}>
                      {story.tag}
                    </span>
                    <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#140128]/70' : 'text-[#9860ff]'}`}>
                      [ 0{idx + 1} ]
                    </span>
                  </div>
                  <div className={`font-display font-black text-base sm:text-lg tracking-tight uppercase ${isSelected ? 'text-[#140128]' : 'text-white'}`}>
                    {story.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Story Card Display */}
          <div className="lg:col-span-7">
            <div className="bg-[#190230]/90 p-8 sm:p-10 rounded-3xl border border-[#360866] h-full flex flex-col justify-between shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 text-xs font-pixel font-bold text-[#c8ff00] uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>{stories[activeStoryIndex].tag}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display uppercase tracking-tight">
                  {stories[activeStoryIndex].title}
                </h3>

                <p className="text-base sm:text-lg text-[#d1b8ff] leading-relaxed font-normal">
                  {stories[activeStoryIndex].content}
                </p>
              </div>

              {/* Story Quote Badge */}
              <div className="mt-8 pt-6 border-t border-[#2a0453] flex items-center gap-3.5 italic text-sm sm:text-base text-[#c8ff00] font-medium">
                <span className="text-3xl text-[#c8ff00] font-serif leading-none">“</span>
                <span>{stories[activeStoryIndex].quote}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Personal Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {quickFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div 
                key={idx} 
                className="p-5 rounded-2xl bg-[#1c0336]/80 border border-[#360866] flex items-center gap-4 hover:border-[#c8ff00]/40 transition-colors shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center shrink-0 border border-[#c8ff00]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-pixel text-[#9860ff] uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-1 line-clamp-1">
                    {fact.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
