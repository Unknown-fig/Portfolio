import React, { useState } from 'react';
import { testimonials as initialTestimonials } from '../data/testimonialsData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Link } from 'react-router-dom';
import { Quote, Star, ArrowLeft, MessageSquarePlus, Send } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';

export const TestimonialsPage = () => {
  const [list, setList] = useState(initialTestimonials);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', role: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.role || !form.content) {
      toast.error("Please fill in all testimonial fields.");
      return;
    }

    const newTestimonial = {
      id: list.length + 1,
      name: form.name,
      role: form.role,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      content: form.content,
      rating: 5,
      date: "Just now",
    };

    setList([newTestimonial, ...list]);
    toast.success("Thank you! Your testimonial has been submitted.");
    setForm({ name: '', role: '', content: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
          
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-foreground mb-4">
                What People Say
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
                Real feedback from industry professionals, colleagues, and mentors who have experienced my work firsthand.
              </p>
              
              <div className="mt-8">
                <Button
                  onClick={() => setShowForm(!showForm)}
                  variant="outline"
                  className="rounded-full shadow-sm"
                >
                  <MessageSquarePlus className="w-4 h-4 mr-2 text-primary" />
                  {showForm ? 'Cancel Recommendation' : 'Leave a Recommendation'}
                </Button>
              </div>
            </div>
          </div>

          {/* Testimonial Form Modal/Collapse */}
          {showForm && (
            <Card className="max-w-2xl mx-auto mb-12 p-6 sm:p-8 border-primary/40 shadow-xl animate-fade-in">
              <CardTitle className="text-xl font-bold mb-4 font-display">
                Add Your Recommendation
              </CardTitle>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                    Your Role & Company
                  </label>
                  <input
                    type="text"
                    required
                    value={form.role}
                    onChange={(e) => setForm({ ...form, role: e.target.value })}
                    placeholder="e.g. Engineering Lead at Acme"
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-muted-foreground mb-1">
                    Recommendation
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.content}
                    onChange={(e) => setForm({ ...form, content: e.target.value })}
                    placeholder="Share your thoughts about working with Utsab..."
                    className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full text-white" style={{ backgroundColor: '#FE5C02' }}>
                  <Send className="w-4 h-4 mr-2" />
                  Submit Feedback
                </Button>
              </form>
            </Card>
          )}

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((item) => (
              <Card
                key={item.id}
                className="p-6 sm:p-7 flex flex-col justify-between hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div>
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-border/60">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-border"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {item.role}
                    </p>
                    <p className="text-[11px] text-muted-foreground/70">
                      {item.date}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};
