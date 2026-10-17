import React, { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Instagram, Languages } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { toast } from 'sonner';

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
      toast.success("Message sent successfully!", {
        description: "I'll get back to you soon. Thanks for reaching out!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-card/40 border-t border-border/40 relative">
      <div className="section-container">
        
        {/* Title */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <div className="pulse-chip mb-4">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white text-xs font-bold mr-2">
              05
            </span>
            <span>Contact</span>
          </div>
          <h2 className="section-title text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl text-left">
            Interested in collaborating on AI/ML models, discussing cybersecurity, or just want to chat tech? Let's get in touch!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="mailto:speedrunner0007@gmail.com"
              className="flex items-center p-5 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-200 group shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Email Directly</div>
                <div className="text-sm sm:text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  speedrunner0007@gmail.com
                </div>
              </div>
            </a>

            <div className="flex items-center p-5 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mr-4">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Location</div>
                <div className="text-sm sm:text-base font-semibold text-foreground">
                  Noida, Uttar Pradesh, India
                </div>
              </div>
            </div>

            <div className="flex items-center p-5 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center mr-4">
                <Languages className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium text-muted-foreground">Languages</div>
                <div className="text-sm font-semibold text-foreground space-y-0.5 mt-1">
                  <div>Hindi <span className="text-xs text-muted-foreground font-normal">(Full Professional)</span></div>
                  <div>English <span className="text-xs text-muted-foreground font-normal">(Professional Working)</span></div>
                  <div>Bengali <span className="text-xs text-muted-foreground font-normal">(Native or Bilingual)</span></div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="text-sm font-semibold text-foreground mb-3">Connect on Professional Networks</div>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/utsab-mukharjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-blue-500/30 bg-blue-500/10 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="Connect with Utsab Mukharjee on LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-pink-500 hover:border-pink-500/50 transition-colors shadow-sm"
                  aria-label="Instagram Profile"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 sm:p-8 shadow-xl border-border/80">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, ideas, or opportunity..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl shadow-lg font-semibold text-white"
                  style={{ backgroundColor: '#FE5C02' }}
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>

        </div>

      </div>
    </section>
  );
};
