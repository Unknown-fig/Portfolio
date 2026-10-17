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
  Lightbulb
} from 'lucide-react';
import { Card, CardContent } from './ui/Card';

export const About = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const stories = [
    {
      title: "The Spark: Inspecting Elements at Age 9",
      tag: "Where it began",
      content: "I still remember the feeling of pressing F12 in a browser for the first time as a kid, changing a website's headline, and realizing software wasn't immutable magic—it was written by people, and I could write it too. What started as childhood curiosity with HTML tags evolved into building full-stack web applications and low-level system software.",
      quote: "Curiosity is the best debugger.",
    },
    {
      title: "Why Low-Level & C Language?",
      tag: "Systems Thinking",
      content: "While many developers rush exclusively to high-level frameworks and API wrappers, I wanted to understand memory addresses, pointers, struct padding, and how CPUs actually execute instructions. Diving into C gave me deep respect for hardware efficiency and made every higher-level language feel completely transparent.",
      quote: "If you understand pointers and memory, no framework will ever scare you.",
    },
    {
      title: "Scaler School of Technology Crucible",
      tag: "Industry Mentorship",
      content: "Completing competitive internships across multiple cohorts at Scaler School of Technology shaped how I think as an engineer. Working with industry mentors pushed me past 'code that just works' toward engineering rigor: clean architecture, edge-case validation, code reviews, and designing systems that scale.",
      quote: "Great software is written for humans to read, and computers to execute.",
    },
    {
      title: "The Maker's Itch: Building Real Things",
      tag: "Open Source Craft",
      content: "I don't just write scripts for classroom assignments—I build software I personally want to use every day: a 3D hand-gesture air canvas so anyone can sculpt in mid-air, an IoT gas leak detection pipeline to keep lab environments safe, and a self-hosted audio streaming server with synchronized lyrics.",
      quote: "Build what you wish existed.",
    },
  ];

  const quickFacts = [
    { icon: Terminal, label: "Daily Tools", value: "Neovim, VS Code, Git, Linux Terminal" },
    { icon: Headphones, label: "Focus Soundtrack", value: "Lo-Fi Instrumental & Synthwave" },
    { icon: Coffee, label: "Daily Fuel", value: "Hot Chai & Curiosity" },
    { icon: BookOpen, label: "Reading Now", value: "Operating Systems & Computer Architecture" },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-card/40 border-y border-border/40 relative">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-specular border border-border/70 text-xs font-semibold text-primary mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind the Screen & The Story</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            A Bit More About Me
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            Beyond the resume bullet points: how I got into software, why I care about low-level systems, and what keeps me building late at night.
          </p>
        </div>

        {/* Interactive Story Tabs + Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 text-left">
          
          {/* Left: Story Selection Pills */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5">
            {stories.map((story, idx) => {
              const isSelected = activeStoryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStoryIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-200 spring-press border flex flex-col gap-1 ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.01]"
                      : "glass-specular text-muted-foreground border-border/70 hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] font-mono uppercase font-bold tracking-wider ${isSelected ? 'text-primary-foreground/80' : 'text-primary'}`}>
                      {story.tag}
                    </span>
                    <span className="text-xs opacity-60">0{idx + 1}</span>
                  </div>
                  <div className={`font-bold text-sm sm:text-base ${isSelected ? 'text-white' : 'text-foreground'}`}>
                    {story.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Story Card Display */}
          <div className="lg:col-span-7">
            <Card className="glass-specular p-6 sm:p-8 rounded-3xl border-border/70 h-full flex flex-col justify-between shadow-xl">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                  <Lightbulb className="w-4 h-4" />
                  <span>{stories[activeStoryIndex].tag}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground font-display">
                  {stories[activeStoryIndex].title}
                </h3>

                <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
                  {stories[activeStoryIndex].content}
                </p>
              </div>

              {/* Story Quote Badge */}
              <div className="mt-8 pt-5 border-t border-border/60 flex items-center gap-3 italic text-xs sm:text-sm text-primary font-medium">
                <span className="text-2xl text-primary/40 font-serif leading-none">“</span>
                <span>{stories[activeStoryIndex].quote}</span>
              </div>
            </Card>
          </div>

        </div>

        {/* Quick Personal Facts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {quickFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div 
                key={idx} 
                className="p-4 rounded-2xl glass-specular border border-border/60 flex items-center gap-3.5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                    {fact.label}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground mt-0.5 line-clamp-1">
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
