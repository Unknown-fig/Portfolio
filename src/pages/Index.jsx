import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { ParallaxBackground } from '../components/ParallaxBackground';
import { GeolocationGreeting } from '../components/GeolocationGreeting';
import { LiveAnalytics } from '../components/LiveAnalytics';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Projects } from '../components/Projects';
import { Timeline } from '../components/Timeline';
import { Games } from '../components/Games';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export const Index = () => {
  useEffect(() => {
    // Scroll listener for hash anchors
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          const offset = window.innerWidth < 768 ? 80 : 70;
          window.scrollTo({
            top: el.offsetTop - offset,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  return (
    <ParallaxBackground className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />

      <main className="space-y-4 sm:space-y-8">
        <Hero />

        {/* Live Bar with Geolocation Greeting & Live Visitor Counter */}
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center items-center py-4">
          <GeolocationGreeting />
          <LiveAnalytics />
        </div>

        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Games />
        <Contact />
      </main>

      <Footer />
    </ParallaxBackground>
  );
};
