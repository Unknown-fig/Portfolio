import React from 'react';
import { certificates } from '../data/certificatesData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Award, Calendar, Clock, ExternalLink, ShieldCheck, Sparkles } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';

export const Certificates = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5" />
              Professional Certifications
            </div>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              Certificates & Achievements
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg">
              Showcasing verified credentials, industry knowledge, and continuous learning milestones.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="overflow-hidden hover:shadow-2xl border-border/80 hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="aspect-[16/10] bg-muted overflow-hidden relative group">
                  <img
                    src={cert.image}
                    alt={`${cert.title} Certificate`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold shadow-md">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-foreground mb-1 leading-snug">
                        {cert.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-primary">
                        {cert.provider} • <span className="text-muted-foreground">{cert.instructor}</span>
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs font-medium">
                          {skill}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm text-muted-foreground pt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{cert.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        <span>{cert.duration}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-[11px] font-mono text-muted-foreground truncate max-w-[240px]">
                      ID: {cert.certificateId}
                    </div>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs font-bold text-primary hover:underline"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* In Progress Card */}
            <Card className="border-dashed border-2 border-border/80 bg-muted/20 flex flex-col items-center justify-center p-8 text-center min-h-[350px]">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Sparkles className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-2">
                More Certifications In Progress
              </h3>
              <p className="text-muted-foreground text-sm max-w-sm mb-4 leading-relaxed">
                Currently pursuing coursework in Advanced System Architecture, Cryptography, and Cloud Infrastructure with Scaler Academy.
              </p>
              <Badge variant="outline" className="text-xs font-semibold">
                Upcoming 2025
              </Badge>
            </Card>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
