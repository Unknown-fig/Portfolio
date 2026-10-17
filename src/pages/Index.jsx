import React, { useEffect } from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { MarqueeTicker } from '../components/MarqueeTicker';
import { AtmosphericBackground } from '../components/AtmosphericBackground';
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
    // Scroll listener for hash anchors with Lenis support
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
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
      }, 100);
    }
  }, []);

  return (
    <AtmosphericBackground className="min-h-screen bg-[#140128] text-white">
      <Navbar />

      <main className="space-y-4 sm:space-y-8">
        <Hero />

        {/* Live Bar with Geolocation Greeting & Live Visitor Counter */}
        <div className="container mx-auto px-4 flex flex-col sm:flex-row gap-4 justify-center items-center py-2">
          <GeolocationGreeting />
          <LiveAnalytics />
        </div>

        {/* 1minus1 Kinetic Ticker Ribbon 1 */}
        <MarqueeTicker 
          items={[
            "NEURAL VISION AI",
            "SYSTEMS ARCHITECTURE",
            "LOW-LEVEL C POINTERS",
            "REAL-TIME 3D EXPERIENCES",
            "ARDUINO IOT TELEMETRY",
            "HIGH-PERFORMANCE CODE",
            "REVERSE ENGINEERING",
            "OPEN SOURCE CRAFT"
          ]}
          speed="fast"
          direction="left"
        />

        <About />
        <Skills />

        {/* 1minus1 Kinetic Ticker Ribbon 2 */}
        <MarqueeTicker 
          items={[
            "11 VERIFIED REPOSITORIES",
            "ZERO SPECULATIVE BLOAT",
            "SURGICAL C OPTIMIZATION",
            "ACCELERATED WEB EXPERIENCES",
            "HANDCRAFTED CODE",
            "BUILD TO UNDERSTAND"
          ]}
          speed="normal"
          direction="right"
          className="bg-[#190230]"
        />

        <Projects />
        <Timeline />
        <Games />
        <Contact />
      </main>

      <Footer />
    </AtmosphericBackground>
  );
};
