import React, { useState, useMemo } from 'react';
import { 
  Github, 
  ExternalLink, 
  Search, 
  Layers, 
  Sparkles, 
  Terminal, 
  Code2, 
  Check, 
  Copy, 
  X, 
  Cpu, 
  Globe, 
  ArrowUpRight 
} from 'lucide-react';
import { projectsData, projectCategories } from '../data/projectsData';
import { SpotlightCard } from './ui/SpotlightCard';
import { ChromaticImage } from './ui/ChromaticImage';
import { SplitTextReveal } from './ui/SplitTextReveal';
import { soundEngine } from '../utils/soundEngine';

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [copiedClone, setCopiedClone] = useState(false);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: projectsData.length };
    projectsData.forEach((project) => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch = 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query)) ||
        project.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyClone = (repoUrl) => {
    const cmd = `git clone ${repoUrl}.git`;
    navigator.clipboard.writeText(cmd);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section id="projects" className="py-20 sm:py-28 relative overflow-hidden">
      {/* Blueprint Crosshairs & Coordinate Tags */}
      <div className="tech-crosshair top-6 left-6">+ [SYS:03 // PRODUCTION_BUILDS]</div>
      <div className="tech-crosshair top-6 right-6">+ [REPOSITORIES // 11_ACTIVE]</div>

      <div className="section-container relative z-10">
        
        {/* Section Title & Header */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DEPLOYED ARTIFACTS // HANDCRAFTED SOFTWARE</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
            <div>
              <h2 className="section-title text-white mb-4 uppercase">
                <SplitTextReveal mode="words">FEATURED</SplitTextReveal>{' '}
                <span className="text-[#c8ff00]">
                  <SplitTextReveal mode="words" delay={0.12}>BUILDS</SplitTextReveal>
                </span>
              </h2>
              <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl text-left font-normal">
                Directly explore full-stack applications, 3D computer vision experiments, IoT hardware bridges, streaming media servers, and algorithmic CLI tools.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 bg-[#1c0336] border border-[#360866] px-5 py-3 rounded-2xl shadow-md">
              <div className="w-10 h-10 rounded-xl bg-[#c8ff00]/10 flex items-center justify-center text-[#c8ff00] border border-[#c8ff00]/20">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-pixel text-[#9860ff] uppercase tracking-wider">
                  VERIFIED BUILDS
                </div>
                <div className="text-sm text-[#c8ff00] font-mono font-bold">
                  {projectsData.length} Live Repositories
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar">
            {projectCategories.map((category) => {
              const count = categoryCounts[category] || 0;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onMouseEnter={() => soundEngine.playHover()}
                  onClick={() => {
                    soundEngine.playSwitch();
                    setSelectedCategory(category);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 select-none flex items-center gap-2 border ${
                    isSelected
                      ? "bg-[#c8ff00] text-[#140128] border-[#c8ff00] shadow-[0_0_20px_rgba(200,255,0,0.3)] scale-[1.02]"
                      : "bg-[#1c0336]/80 text-[#b8a9cf] border-[#360866] hover:text-white hover:border-[#9860ff]/60"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-[#140128]/20 text-[#140128]"
                        : "bg-[#26024a] text-[#c8ff00]"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px] sm:min-w-[280px]">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#9860ff]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, title, or tags..."
              className="w-full bg-[#1c0336] border border-[#360866] rounded-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-white placeholder:text-[#b8a9cf]/50 focus:outline-none focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b8a9cf] hover:text-white text-xs font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#1c0336]/50 rounded-3xl border border-dashed border-[#360866]">
            <Terminal className="w-12 h-12 text-[#9860ff] mx-auto mb-3 opacity-60" />
            <h3 className="text-lg font-bold text-white mb-1 font-display uppercase">
              No Matching Projects Found
            </h3>
            <p className="text-xs sm:text-sm text-[#b8a9cf] mb-5">
              Try adjusting your query or resetting category filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="btn-1minus1 text-xs py-2.5 px-6"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid with SpotlightCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <SpotlightCard
              key={project.id}
              onMouseEnter={() => soundEngine.playHover()}
              className="group flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300"
            >
              {/* Card Image Banner with Chromatic Aberration & Scanlines */}
              <div 
                className="relative h-52 w-full overflow-hidden bg-[#140128] cursor-pointer"
                onClick={() => {
                  soundEngine.playClick();
                  setActiveModalProject(project);
                }}
              >
                <ChromaticImage
                  src={project.image}
                  alt={project.title}
                  className="object-top"
                  containerClassName="w-full h-full"
                  intensity={6}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0336] via-[#1c0336]/30 to-transparent pointer-events-none" />
                
                {/* Badges on Top */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                  <span className="text-[10px] font-pixel px-3 py-1 rounded-full bg-[#140128]/90 border border-[#360866] text-[#c8ff00] shadow-sm uppercase">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[10px] font-pixel px-3 py-1 rounded-full bg-[#c8ff00] text-[#140128] font-bold shadow-sm uppercase">
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Inspect Button Pill */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-[#140128]/90 text-[#c8ff00] border border-[#c8ff00]/40 shadow-sm flex items-center gap-1 uppercase tracking-wider">
                    Inspect
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#c8ff00]" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 
                    onClick={() => {
                      soundEngine.playClick();
                      setActiveModalProject(project);
                    }}
                    className="text-xl font-display font-black text-white group-hover:text-[#c8ff00] transition-colors cursor-pointer mb-2.5 leading-snug line-clamp-1 uppercase tracking-tight"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#b8a9cf] mb-4 line-clamp-3 leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Human Story Note */}
                  {project.story && (
                    <div className="p-3 rounded-2xl bg-[#26024a]/60 border border-[#9860ff]/30 text-xs text-[#d1b8ff] italic mb-4 line-clamp-2 text-left">
                      💡 "{project.story}"
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 text-left">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start text-xs text-[#b8a9cf] leading-tight gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[#26024a] text-[#c8ff00] border border-[#9860ff]/30"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#190230] text-[#9860ff]">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-[#2a0453] flex items-center gap-2.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundEngine.playClick()}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-[#c8ff00] text-[#140128] hover:bg-white text-xs font-black uppercase tracking-wider shadow-sm transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Repository</span>
                  </a>

                  <button
                    onClick={() => {
                      soundEngine.playClick();
                      setActiveModalProject(project);
                    }}
                    className="px-4 py-2.5 rounded-full border border-[#9860ff]/40 bg-[#26024a]/80 hover:border-[#c8ff00] hover:text-[#c8ff00] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Specs
                  </button>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>

        {/* Global GitHub Showcase Callout Banner */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-3xl bg-[#190230]/90 border border-[#360866] shadow-[0_0_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-5 text-left">
              <div className="w-16 h-16 rounded-2xl bg-[#c8ff00] text-[#140128] flex items-center justify-center flex-shrink-0 shadow-[0_0_25px_rgba(200,255,0,0.4)]">
                <Github className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl sm:text-2xl font-black font-display text-white uppercase tracking-tight">
                  EXPLORE THE VAULT ON GITHUB: @Unknown-fig
                </h4>
                <p className="text-xs sm:text-sm text-[#b8a9cf] mt-1 max-w-xl font-normal">
                  Inspect commit logs, architecture benchmarks, branch workflows, and active contributions across all desktop and cloud repositories.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="https://github.com/Unknown-fig"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto btn-1minus1 text-xs py-3.5 px-8"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Project Detail & Quick Inspect Modal */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-[#140128] border border-[#360866] rounded-t-[32px] sm:rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.8)] overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Grabber Indicator */}
            <div className="w-12 h-1.5 bg-[#9860ff]/40 rounded-full mx-auto my-3 sm:hidden flex-shrink-0" />
            
            {/* Modal Image Header */}
            <div className="relative h-64 sm:h-80 w-full bg-[#1c0336] flex-shrink-0 overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140128] via-[#140128]/40 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#140128]/80 backdrop-blur-md border border-[#9860ff]/40 flex items-center justify-center text-white hover:text-[#c8ff00] hover:border-[#c8ff00] transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badges in Header */}
              <div className="absolute bottom-5 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-pixel px-3 py-1 rounded-full bg-[#140128]/90 text-[#c8ff00] border border-[#360866] uppercase">
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.badge && (
                    <span className="text-[10px] font-pixel px-3 py-1 rounded-full bg-[#c8ff00] text-[#140128] font-bold uppercase">
                      {activeModalProject.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight uppercase">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 pb-[max(2rem,env(safe-area-inset-bottom))]">
              {/* Human Story Callout */}
              {activeModalProject.story && (
                <div className="p-5 rounded-2xl bg-[#1c0336] border border-[#c8ff00]/40 text-left">
                  <div className="flex items-center gap-2 text-xs font-pixel font-bold text-[#c8ff00] uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>WHY I BUILT THIS // MOTIVATION</span>
                  </div>
                  <p className="text-sm sm:text-base text-[#d1b8ff] italic leading-relaxed">
                    "{activeModalProject.story}"
                  </p>
                </div>
              )}

              {/* Description */}
              <div className="text-left">
                <h4 className="text-[11px] font-pixel uppercase tracking-wider text-[#9860ff] mb-2">
                  TECHNICAL ARCHITECTURE
                </h4>
                <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Key Architectural Highlights */}
              <div>
                <h4 className="text-[11px] font-pixel uppercase tracking-wider text-[#9860ff] mb-3">
                  SYSTEM CAPABILITIES
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="p-3.5 rounded-2xl bg-[#1c0336] border border-[#360866] flex items-start gap-2.5 text-xs text-white/90"
                    >
                      <Check className="w-4 h-4 text-[#c8ff00] flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-[11px] font-pixel uppercase tracking-wider text-[#9860ff] mb-2.5">
                  TECHNOLOGIES & PROTOCOLS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-[#26024a] text-[#c8ff00] border border-[#9860ff]/30 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal Clone Command Bar */}
              <div className="p-4 rounded-2xl bg-[#1c0336] border border-[#360866] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-[#b8a9cf]">
                  <Terminal className="w-4 h-4 text-[#c8ff00] flex-shrink-0" />
                  <span className="text-white font-bold">git clone</span>
                  <span className="text-[#c8ff00] truncate">{activeModalProject.githubUrl}.git</span>
                </div>

                <button
                  onClick={() => handleCopyClone(activeModalProject.githubUrl)}
                  className="px-4 py-2 rounded-xl border border-[#9860ff]/40 bg-[#26024a] hover:border-[#c8ff00] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedClone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#c8ff00]" />
                      <span className="text-[#c8ff00]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#b8a9cf]" />
                      <span>Copy Clone Cmd</span>
                    </>
                  )}
                </button>
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 btn-1minus1 text-xs py-3.5 justify-center"
                >
                  <Github className="w-4 h-4" />
                  <span>Open GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto btn-1minus1-outline text-xs py-3.5 px-6"
                  >
                    <span>Live Showcase</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
