import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

export const GeolocationGreeting = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch('https://ipapi.co/json/');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        if (isMounted) setCity(data.city || 'somewhere amazing');
      } catch {
        if (isMounted) setCity('somewhere amazing');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-muted-foreground animate-pulse text-sm">
        <MapPin className="w-4 h-4 text-primary" />
        <span>Locating visitor...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 border border-border/80 backdrop-blur-sm text-foreground text-sm shadow-sm animate-fade-in">
      <MapPin className="w-4 h-4 text-primary animate-bounce" />
      <span>
        Hello from <strong className="text-primary font-semibold">{city}</strong>—thanks for visiting!
      </span>
    </div>
  );
};
