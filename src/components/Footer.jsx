import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ChevronUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/80 py-12 relative">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm shadow-sm">
              UM
            </div>
            <div>
              <div className="font-display font-bold text-foreground text-base">
                Utsab Mukharjee
              </div>
              <div className="text-xs text-muted-foreground">
                Breaking bugs, building future
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <a href="/#about" className="hover:text-foreground transition-colors">About</a>
            <a href="/#skills" className="hover:text-foreground transition-colors">Skills</a>
            <a href="/#timeline" className="hover:text-foreground transition-colors">Timeline</a>
            <Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <Link to="/certificates" className="hover:text-foreground transition-colors">Certificates</Link>
            <Link to="/testimonials" className="hover:text-foreground transition-colors">Testimonials</Link>
            <a href="/#games" className="hover:text-foreground transition-colors">Games</a>
            <a href="/#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Utsab Mukharjee. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with curiosity &</span>
            <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
            <span>clean code</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
