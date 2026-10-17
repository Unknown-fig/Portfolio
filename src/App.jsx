import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Toaster } from 'sonner';

import { Index } from './pages/Index';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Certificates } from './pages/Certificates';
import { TestimonialsPage } from './pages/TestimonialsPage';

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="*" element={<Index />} />
        </Routes>
      </Router>
      <Toaster position="top-right" richColors />
    </ThemeProvider>
  );
}

export default App;
