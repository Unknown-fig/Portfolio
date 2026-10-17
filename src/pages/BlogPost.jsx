import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ArrowLeft, Calendar, Clock, User, Share2 } from 'lucide-react';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { toast } from 'sonner';

export const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
        <Navbar />
        <main className="pt-36 pb-20 text-center container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 font-display">Blog Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested article could not be located.</p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  // Simple markdown renderer for headers, bold, code blocks, and paragraphs
  const renderContent = (content) => {
    const lines = content.split('\n');
    const elements = [];
    let inCodeBlock = false;
    let codeBuffer = [];

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={`code-${index}`} className="p-4 rounded-xl bg-muted/80 border border-border text-xs sm:text-sm font-mono overflow-x-auto my-4 text-foreground">
              <code>{codeBuffer.join('\n')}</code>
            </pre>
          );
          codeBuffer = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeBuffer.push(line);
        return;
      }

      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={index} className="text-2xl sm:text-3xl font-display font-bold text-foreground mt-8 mb-4 border-b border-border/40 pb-2">
            {line.replace('## ', '')}
          </h2>
        );
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={index} className="text-xl sm:text-2xl font-display font-bold text-foreground mt-6 mb-3">
            {line.replace('### ', '')}
          </h3>
        );
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={index} className="ml-6 list-disc text-muted-foreground text-base sm:text-lg mb-1 leading-relaxed">
            {line.replace('- ', '')}
          </li>
        );
      } else if (line.trim().length > 0) {
        elements.push(
          <p key={index} className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-4">
            {line}
          </p>
        );
      }
    });

    return elements;
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20">
        <article className="container mx-auto px-4 sm:px-6 max-w-4xl">
          
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to All Articles
          </Link>

          {/* Meta header */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="default" className="text-xs uppercase font-bold">
                {post.category}
              </Badge>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground ml-auto">
                <User className="w-3.5 h-3.5" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-[1.2]">
              {post.title}
            </h1>
          </div>

          {/* Cover Hero Banner */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden border border-border shadow-xl mb-12 bg-muted">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Body */}
          <div className="prose dark:prose-invert max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Bottom Share & Navigation */}
          <div className="flex items-center justify-between pt-10 mt-12 border-t border-border/80">
            <div className="text-sm font-semibold text-foreground">
              Written by <span className="text-primary">{post.author}</span>
            </div>
            <Button onClick={handleShare} variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share Article
            </Button>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
};
