import React from 'react';
import { Shield, Brain, Cpu, Bot, Trophy, Users } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/Card';

export const Skills = () => {
  const skillsList = [
    { name: "Python for ML", level: 92, color: "#3776ab" },
    { name: "Machine Learning Algorithms", level: 86, color: "#4ecdc4" },
    { name: "C Language & System Basics", level: 85, color: "#00599c" },
    { name: "Prompt Engineering & Model Testing", level: 90, color: "#f7df1e" },
    { name: "Cybersecurity & Ethical Hacking", level: 75, color: "#ff6b6b" },
    { name: "AI Agents & n8n Automation", level: 82, color: "#ff7043" },
  ];

  const featureCards = [
    {
      icon: Brain,
      title: "Python & Machine Learning",
      description: "Hands-on model development, feature engineering, and data analysis using Python, scikit-learn, and mathematical fundamentals.",
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      icon: Bot,
      title: "AI Agents & n8n Workflows",
      description: "Designing autonomous AI agents, orchestrating multi-step workflows with n8n, and integrating APIs with large language models.",
      color: "text-purple-500",
      bg: "bg-purple-500/10",
    },
    {
      icon: Shield,
      title: "Cybersecurity & Ethical Hacking",
      description: "Exploring vulnerability assessments, defensive system security, ethical penetration testing concepts, and memory safety fundamentals.",
      color: "text-red-500",
      bg: "bg-red-500/10",
    },
    {
      icon: Cpu,
      title: "C & Systems Programming",
      description: "Deep understanding of pointers, memory management, buffer structures, and low-level computational efficiency in C.",
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
    {
      icon: Trophy,
      title: "Scaler School of Technology",
      description: "Completed competitive internships across multiple cohorts (2025 & 2026). Worked with industry mentors on practical software applications.",
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      icon: Users,
      title: "Nexstep Network & Community",
      description: "Active member at Nexstep Network. Engaging in peer reviews, collaborative tech projects, and hackathon problem-solving.",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-24 relative">
      <div className="section-container">
        
        {/* Section Title */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold mr-2">
              03
            </span>
            <span>Skills & Experience</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            Technical Expertise & Domain Focus
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-left">
            Focused on machine learning fundamentals, autonomous AI agents, cybersecurity basics, and low-level C programming.
          </p>
        </div>

        {/* Skills Progress Meters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillsList.map((skill) => (
            <Card key={skill.name} className="p-5 hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <span className="font-semibold text-foreground text-base">{skill.name}</span>
                <span className="font-mono text-sm font-bold text-primary">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${skill.level}%`,
                    backgroundColor: skill.color,
                  }}
                />
              </div>
            </Card>
          ))}
        </div>

        {/* 6 Feature Domain Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <Card
                key={idx}
                className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/80 hover:border-primary/50"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-2xl ${feat.bg} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-200`}>
                    <Icon className={`w-6 h-6 ${feat.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {feat.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {feat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};
