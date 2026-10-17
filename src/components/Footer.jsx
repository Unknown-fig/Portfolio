import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp, Zap } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const Footer = () => {
  const scrollToTop = () => {
    soundEngine.playSuccess();
    if (window.$lenis) {
      window.$lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#140128] border-t border-[#26024a] py-14 relative z-10">
      <div className="section-container !py-0">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#26024a]">
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 bg-[#c8ff00] text-[#140128] rounded-xl flex items-center justify-center font-black font-display text-base shadow-[0_0_20px_rgba(200,255,0,0.3)]">
              UM
            </div>
            <div className="text-left">
              <div className="font-display font-black text-white text-lg tracking-tight uppercase">
                Utsab Mukharjee
              </div>
              <div className="text-[10px] font-pixel text-[#9860ff] tracking-wider uppercase">
                SYSTEMS ARCHITECTURE & AI
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-bold uppercase tracking-wider text-[#b8a9cf]">
            <a href="/#about" className="hover:text-[#c8ff00] transition-colors">About</a>
            <a href="/#skills" className="hover:text-[#c8ff00] transition-colors">Skills</a>
            <a href="/#projects" className="hover:text-[#c8ff00] transition-colors">Projects</a>
            <a href="/#timeline" className="hover:text-[#c8ff00] transition-colors">Timeline</a>
            <Link to="/certificates" className="hover:text-[#c8ff00] transition-colors">Certificates</Link>
            <a href="/#games" className="hover:text-[#c8ff00] transition-colors">Games</a>
            <Link to="/blog" className="hover:text-[#c8ff00] transition-colors">Blog</Link>
            <Link to="/testimonials" className="hover:text-[#c8ff00] transition-colors">Testimonials</Link>
            <a href="/#contact" className="hover:text-[#c8ff00] transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-2xl border border-[#360866] bg-[#1c0336] flex items-center justify-center text-[#c8ff00] hover:bg-[#c8ff00] hover:text-[#140128] transition-all shadow-md group"
            aria-label="Back to top"
          >
            <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-[#b8a9cf] font-mono">
          <div>
            © {new Date().getFullYear()} Utsab Mukharjee. All systems operational.
          </div>
          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <span className="text-[#c8ff00] font-bold">Lenis Physics & WebGL</span>
            <Zap className="w-3.5 h-3.5 text-[#c8ff00]" />
          </div>
        </div>
      </div>
    </footer>
  );
};
