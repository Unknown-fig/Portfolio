import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MagneticButton } from './ui/MagneticButton';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Certificates", href: "/certificates" },
    { name: "Games", href: "/#games" },
    { name: "Blog", href: "/blog" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  const handleScrollClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname !== '/') {
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        if (window.$lenis) {
          window.$lenis.scrollTo(el, { offset: -80 });
        } else {
          const offset = window.innerWidth < 768 ? 80 : 70;
          window.scrollTo({
            top: el.offsetTop - offset,
            behavior: 'smooth',
          });
        }
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#140128]/85 backdrop-blur-2xl border-b border-[#26024a] transition-all duration-300 pt-[env(safe-area-inset-top)]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-[#c8ff00] text-[#140128] rounded-xl flex items-center justify-center font-black font-display text-base tracking-tighter shadow-[0_0_20px_rgba(200,255,0,0.3)] transition-transform duration-200 group-hover:scale-105 group-hover:rotate-3">
              UM
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-white text-lg tracking-tight group-hover:text-[#c8ff00] transition-colors">
                Utsab Mukharjee
              </span>
              <span className="font-pixel text-[10px] text-[#9860ff] tracking-wider uppercase">
                ENGINEER // BUILDER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 bg-[#1c0336]/60 px-3 py-1.5 rounded-full border border-[#2a0453]">
            {navLinks.map((item) => {
              const isPageLink = !item.href.startsWith('/#') && item.href !== '/';
              return isPageLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 ${
                    location.pathname === item.href
                      ? "text-[#140128] bg-[#c8ff00] font-black shadow-[0_0_15px_rgba(200,255,0,0.3)]"
                      : "text-white/70 hover:text-white hover:bg-[#26024a]/80"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleScrollClick(item.href)}
                  className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full text-white/70 hover:text-[#c8ff00] hover:bg-[#26024a]/80 transition-all duration-200"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Magnetic CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <MagneticButton
              href="/#contact"
              onClick={() => handleScrollClick('/#contact')}
              className="btn-1minus1 text-xs py-2.5 px-5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </div>

          {/* Mobile menu toggle button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl bg-[#26024a] text-white border border-[#9860ff]/30 hover:border-[#c8ff00] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#c8ff00]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden py-5 border-t border-[#2a0453] bg-[#140128]/95 backdrop-blur-2xl rounded-b-2xl animate-fade-in">
            <div className="flex flex-col space-y-1.5 px-2">
              {navLinks.map((item) => {
                const isPageLink = !item.href.startsWith('/#') && item.href !== '/';
                return isPageLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#c8ff00] hover:bg-[#26024a] rounded-xl transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleScrollClick(item.href)}
                    className="px-4 py-2.5 text-sm font-bold uppercase tracking-wider text-white/80 hover:text-[#c8ff00] hover:bg-[#26024a] rounded-xl transition-colors"
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="pt-3">
                <a
                  href="/#contact"
                  onClick={() => handleScrollClick('/#contact')}
                  className="btn-1minus1 w-full justify-center text-xs py-3"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
