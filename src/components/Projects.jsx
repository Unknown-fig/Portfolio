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
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { projectsData, projectCategories } from '../data/projectsData';

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
    <section id="projects" className="py-16 sm:py-24 relative">
      <div className="section-container">
        
        {/* Section Title & Header */}
        <div className="flex flex-col items-start mb-10 sm:mb-14 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-specular border border-border/70 text-xs font-semibold text-primary mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Handcrafted Projects & Software</span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
            <div>
              <h2 className="section-title text-foreground mb-3">
                Projects & Open-Source Showcase
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-left">
                Directly explore full-stack applications, 3D computer vision experiments, IoT hardware bridges, streaming media servers, and algorithmic CLI tools.
              </p>
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-border/80 px-4 py-2.5 rounded-2xl shadow-sm">
              <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Code2 className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-semibold text-foreground uppercase tracking-wider">
                  Verified Repositories
                </div>
                <div className="text-sm text-primary font-mono font-bold">
                  {projectsData.length} Projects Live on GitHub
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10">
          
          {/* Categories Horizontal Scroll */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none no-scrollbar">
            {projectCategories.map((category) => {
              const count = categoryCounts[category] || 0;
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-150 spring-press select-none flex items-center gap-2 border ${
                    isSelected
                      ? "bg-primary text-primary-foreground border-primary shadow-md shadow-primary/20 scale-[1.02]"
                      : "bg-card/70 text-muted-foreground border-border/80 hover:text-foreground hover:bg-card hover:border-primary/40"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-muted text-muted-foreground"
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
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tech, keyword, or title..."
              className="w-full bg-card/80 border border-border/80 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-card/40 rounded-2xl border border-dashed border-border/80">
            <Terminal className="w-10 h-10 text-muted-foreground mx-auto mb-3 opacity-60" />
            <h3 className="text-base font-semibold text-foreground mb-1">
              No matching projects found
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-4">
              Try adjusting your search query or switching category filters.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
            >
              Reset Filters
            </Button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group flex flex-col overflow-hidden glass-specular border-border/60 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-1.5 rounded-2xl transition-all duration-300"
            >
              {/* Card Image Banner */}
              <div 
                className="relative h-48 w-full overflow-hidden bg-muted cursor-pointer"
                onClick={() => setActiveModalProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Badges on Top */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border/70 text-foreground shadow-sm">
                    {project.category}
                  </span>
                  {project.badge && (
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground shadow-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {project.badge}
                    </span>
                  )}
                </div>

                {/* Inspect Button Pill */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <span className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-background/90 backdrop-blur-md text-foreground border border-border shadow-sm flex items-center gap-1">
                    Quick Inspect
                    <ArrowUpRight className="w-3 h-3 text-primary" />
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <CardContent className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  {/* Title */}
                  <h3 
                    onClick={() => setActiveModalProject(project)}
                    className="text-lg font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer mb-2 leading-snug line-clamp-1"
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Human Story Note */}
                  {project.story && (
                    <div className="p-2.5 rounded-xl bg-primary/5 border border-primary/15 text-[11px] text-foreground/90 italic mb-4 line-clamp-2 text-left">
                      💡 "{project.story}"
                    </div>
                  )}

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 text-left">
                    {project.highlights.slice(0, 2).map((highlight, idx) => (
                      <div key={idx} className="flex items-start text-xs text-muted-foreground/90 leading-tight gap-2">
                        <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-secondary/80 text-secondary-foreground border border-border/50"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-mono px-1.5 py-0.5 rounded-md bg-muted text-muted-foreground">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-border/70 flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-foreground text-background hover:bg-primary hover:text-primary-foreground text-xs font-semibold shadow-sm transition-all duration-200"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="px-3 py-2 rounded-xl border border-border bg-card hover:bg-accent text-foreground text-xs font-medium transition-colors"
                    title="Inspect Architecture & Details"
                  >
                    Details
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Global GitHub Showcase Callout Banner */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-card via-card/90 to-primary/10 border border-border/80 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-radial from-primary/10 to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4 text-left">
              <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 shadow-md">
                <Github className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-foreground">
                  Explore More on GitHub: @Unknown-fig
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 max-w-xl">
                  Inspect commit logs, architecture benchmarks, branch workflows, and active contributions across all desktop and cloud repositories.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <a
                href="https://github.com/Unknown-fig"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm shadow-md hover:bg-primary/90 transition-all hover:scale-[1.02]"
              >
                <span>Visit GitHub Profile</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Project Detail & Quick Inspect Modal / Apple Sheet */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[90vh] bg-background border border-border/80 rounded-t-[32px] sm:rounded-3xl shadow-2xl overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Apple HIG Sheet Grabber Indicator */}
            <div className="w-12 h-1.5 bg-muted-foreground/35 hover:bg-muted-foreground/60 rounded-full mx-auto my-2.5 transition-colors cursor-grab sm:hidden flex-shrink-0" />
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 w-full bg-muted flex-shrink-0 overflow-hidden">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-background/80 backdrop-blur-md border border-border flex items-center justify-center text-foreground hover:bg-accent transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badges in Header */}
              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-background/90 text-foreground border border-border">
                    {activeModalProject.category}
                  </span>
                  {activeModalProject.badge && (
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                      {activeModalProject.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight drop-shadow-sm">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 pb-[max(1.75rem,env(safe-area-inset-bottom))]">
              {/* Human Story Callout */}
              {activeModalProject.story && (
                <div className="p-4 sm:p-5 rounded-2xl bg-primary/5 border border-primary/20 text-left">
                  <div className="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Why I Built This</span>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                    "{activeModalProject.story}"
                  </p>
                </div>
              )}

              {/* Description */}
              <div className="text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technical Architecture
                </h4>
                <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              {/* Key Architectural Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  Key Capabilities & Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.highlights.map((highlight, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-card border border-border/80 flex items-start gap-2.5 text-xs text-foreground/90"
                    >
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2.5">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Terminal Clone Command Bar */}
              <div className="p-4 rounded-2xl bg-card border border-border/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 overflow-x-auto text-xs font-mono text-muted-foreground">
                  <Terminal className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-foreground font-semibold">git clone</span>
                  <span className="text-primary truncate">{activeModalProject.githubUrl}.git</span>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCopyClone(activeModalProject.githubUrl)}
                  className="gap-1.5 flex-shrink-0 text-xs"
                >
                  {copiedClone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Clone Cmd</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all shadow-md"
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
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border bg-card hover:bg-accent text-foreground font-medium text-sm transition-colors"
                  >
                    <span>Documentation & Demo</span>
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
