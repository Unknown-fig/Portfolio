import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Languages } from 'lucide-react';
import { toast } from 'sonner';
import { MagneticButton } from './ui/MagneticButton';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields before sending.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message transmitted successfully!", {
        description: "I'll get back to you soon. Thanks for reaching out!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#180230]/70 border-t border-[#26024a] relative">
      <div className="section-container">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-12 sm:mb-16 text-left">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c0336] border border-[#c8ff00]/40 text-[#c8ff00] text-xs font-pixel mb-5 uppercase tracking-wider shadow-[0_0_15px_rgba(200,255,0,0.15)]">
            <Mail className="w-3.5 h-3.5" />
            <span>TRANSMISSION CHANNELS // OPEN FREQUENCY</span>
          </div>
          <h2 className="section-title text-white mb-4 uppercase">
            LET'S BUILD <span className="text-[#c8ff00]">SOMETHING</span>
          </h2>
          <p className="text-[#b8a9cf] text-base sm:text-lg max-w-2xl text-left font-normal">
            Interested in collaborating on AI/ML models, low-level systems in C, creative WebGL graphics, or have an open role? Transmit a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <a
              href="mailto:speedrunner0007@gmail.com"
              className="flex items-center p-6 rounded-3xl bg-[#1c0336]/80 border border-[#360866] hover:border-[#c8ff00]/60 transition-all duration-300 group shadow-md"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center mr-5 group-hover:scale-110 transition-transform border border-[#c8ff00]/20">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-pixel text-[#9860ff] uppercase tracking-wider">DIRECT EMAIL</div>
                <div className="text-sm sm:text-base font-bold text-white group-hover:text-[#c8ff00] transition-colors mt-0.5">
                  speedrunner0007@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center p-6 rounded-3xl bg-[#1c0336]/80 border border-[#360866] shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#9860ff]/10 text-[#9860ff] flex items-center justify-center mr-5 border border-[#9860ff]/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-pixel text-[#9860ff] uppercase tracking-wider">OPERATIONAL BASE</div>
                <div className="text-sm sm:text-base font-bold text-white mt-0.5">
                  Greater Noida, Uttar Pradesh, India 🇮🇳
                </div>
              </div>
            </div>

            <div className="flex items-center p-6 rounded-3xl bg-[#1c0336]/80 border border-[#360866] shadow-md">
              <div className="w-14 h-14 rounded-2xl bg-[#c8ff00]/10 text-[#c8ff00] flex items-center justify-center mr-5 border border-[#c8ff00]/20">
                <Languages className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-pixel text-[#9860ff] uppercase tracking-wider">LANGUAGES</div>
                <div className="text-xs sm:text-sm font-bold text-white space-y-1 mt-1 font-mono">
                  <div>Hindi <span className="text-xs text-[#b8a9cf] font-normal">(Full Professional)</span></div>
                  <div>English <span className="text-xs text-[#b8a9cf] font-normal">(Professional Working)</span></div>
                  <div>Bengali <span className="text-xs text-[#b8a9cf] font-normal">(Native / Bilingual)</span></div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-xs font-pixel uppercase text-[#9860ff] mb-4">CONNECT ON SOCIAL CHANNELS</div>
              <div className="flex space-x-3">
                <MagneticButton
                  href="https://www.linkedin.com/in/utsab-mukharjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl border border-[#360866] bg-[#1c0336] flex items-center justify-center text-white hover:text-[#140128] hover:bg-[#c8ff00] hover:border-[#c8ff00] transition-all shadow-md"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/Unknown-fig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl border border-[#360866] bg-[#1c0336] flex items-center justify-center text-white hover:text-[#140128] hover:bg-[#c8ff00] hover:border-[#c8ff00] transition-all shadow-md"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </MagneticButton>
                <MagneticButton
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl border border-[#360866] bg-[#1c0336] flex items-center justify-center text-white hover:text-[#140128] hover:bg-[#c8ff00] hover:border-[#c8ff00] transition-all shadow-md"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-6 h-6" />
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#190230]/90 border border-[#360866] shadow-[0_0_50px_rgba(0,0,0,0.6)] text-left">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-pixel uppercase tracking-wider text-[#9860ff] mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Lin"
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#360866] bg-[#140128] text-white text-sm focus:outline-none focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00] transition-colors placeholder:text-[#b8a9cf]/40 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-pixel uppercase tracking-wider text-[#9860ff] mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#360866] bg-[#140128] text-white text-sm focus:outline-none focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00] transition-colors placeholder:text-[#b8a9cf]/40 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-pixel uppercase tracking-wider text-[#9860ff] mb-2">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your build, collaboration idea, or opportunity..."
                    className="w-full px-5 py-3.5 rounded-2xl border border-[#360866] bg-[#140128] text-white text-sm focus:outline-none focus:border-[#c8ff00] focus:ring-1 focus:ring-[#c8ff00] transition-colors resize-none placeholder:text-[#b8a9cf]/40 font-mono"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-1minus1 text-xs py-4 justify-center"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
