import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#skills" },
    { name: "Timeline", href: "/#timeline" },
    { name: "Blog", href: "/blog" },
    { name: "Certificates", href: "/certificates" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Games", href: "/#games" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleScrollClick = (href) => {
    setIsOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (location.pathname !== '/') {
        // Handled by router navigation
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const offset = window.innerWidth < 768 ? 80 : 70;
        window.scrollTo({
          top: el.offsetTop - offset,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border/80 transition-colors duration-200">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center font-bold text-sm shadow-sm transition-transform duration-200 group-hover:scale-105">
              UM
            </div>
            <span className="font-display font-bold text-foreground text-lg tracking-tight group-hover:text-primary transition-colors">
              Utsab Mukharjee
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((item) => {
              const isPageLink = !item.href.startsWith('/#') && item.href !== '/';
              return isPageLink ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleScrollClick(item.href)}
                  className="px-3 py-1.5 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors"
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right controls: Theme toggle & Mobile menu button */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-foreground hover:bg-accent rounded-full transition-transform duration-200 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/60 animate-fade-in bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((item) => {
                const isPageLink = !item.href.startsWith('/#') && item.href !== '/';
                return isPageLink ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleScrollClick(item.href)}
                    className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
