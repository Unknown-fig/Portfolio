import React, { useState } from 'react';
import { timelineData } from '../data/timelineData';
import { Baby, Code, BookOpen, Building, Award, GraduationCap, Briefcase, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

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
    setActiveIndex((prev) => (prev + 1) % timelineData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  const activeMilestone = timelineData[activeIndex];
  const IconComponent = iconMap[activeMilestone.iconName] || Code;

  return (
    <section id="timeline" className="py-16 sm:py-24 bg-card/30 border-y border-border/40 relative">
      <div className="section-container">
        
        {/* Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold mr-2">
              04
            </span>
            <span>Timeline</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            Developer Journey
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-left">
            From discovering HTML tags at age 9 to building systems in C, Python, and modern web frameworks.
          </p>
        </div>

        {/* Featured Milestone Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-6 sm:p-10 border-primary/30 shadow-xl bg-gradient-to-br from-card to-background relative overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-2xl ${activeMilestone.color} text-white flex items-center justify-center shadow-md`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {activeMilestone.date}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-foreground">
                    {activeMilestone.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-primary" />
                  <span className="font-medium text-foreground">{activeMilestone.organization}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{activeMilestone.location}</span>
                </div>
              </div>
            </div>

            <CardContent className="pt-6 px-0 pb-0">
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                {activeMilestone.description}
              </p>

              {/* Navigation controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/40">
                <span className="text-xs font-mono text-muted-foreground">
                  Milestone {activeIndex + 1} of {timelineData.length}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-full border border-border bg-card hover:bg-accent text-foreground transition-colors"
                    aria-label="Previous milestone"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-full border border-border bg-card hover:bg-accent text-foreground transition-colors"
                    aria-label="Next milestone"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Milestone Horizontal Track */}
        <div className="overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div className="flex items-center justify-between min-w-[700px] relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
            {timelineData.map((item, idx) => {
              const ItemIcon = iconMap[item.iconName] || Code;
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all duration-200 ${
                    isActive ? "scale-110" : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-orange-500/30"
                        : "bg-background border-border text-muted-foreground group-hover:border-primary"
                    }`}
                  >
                    <ItemIcon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-bold mt-2 font-mono ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    {item.date.split(' ')[0]}
                  </span>
                  <span className="text-[11px] font-medium text-foreground max-w-[80px] text-center truncate">
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
