import React, { useState, useEffect } from 'react';
import { Users } from 'lucide-react';

export const LiveAnalytics = () => {
  const [visitorCount, setVisitorCount] = useState(1249);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('visitorCount');
    const initial = saved ? parseInt(saved, 10) : 1249;
    setVisitorCount(initial);

    const interval = setInterval(() => {
      setVisitorCount((prev) => {
        const next = prev + Math.floor(Math.random() * 2);
        localStorage.setItem('visitorCount', next.toString());
        return next;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    setClicked(true);
    setVisitorCount((prev) => {
      const next = prev + 1;
      localStorage.setItem('visitorCount', next.toString());
      return next;
    });
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <div
      onClick={handleClick}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-specular border border-border/60 shadow-sm cursor-pointer transition-all duration-150 active:scale-95 select-none hover:border-primary/50"
      title="Click to bump visitor counter"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
      </span>
      <Users className="w-4 h-4 text-muted-foreground" />
      <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">
        Live Stats:
      </span>
      <span className={`text-sm font-bold font-mono tnum transition-transform duration-200 ${clicked ? 'scale-125 text-primary' : 'text-foreground'}`}>
        {visitorCount.toLocaleString()} visitors
      </span>
    </div>
  );
};
