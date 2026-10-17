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
        if (isMounted) setCity(data.city || 'Planet Earth');
      } catch {
        if (isMounted) setCity('Planet Earth');
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-[#b8a9cf] animate-pulse text-xs font-pixel uppercase">
        <MapPin className="w-3.5 h-3.5 text-[#c8ff00]" />
        <span>PINGING TELEMETRY...</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1c0336] border border-[#360866] text-white text-xs font-mono shadow-sm">
      <MapPin className="w-3.5 h-3.5 text-[#c8ff00] animate-bounce" />
      <span>
        TELEMETRY FROM <strong className="text-[#c8ff00] font-bold uppercase">{city}</strong> — WELCOME TO THE REALM
      </span>
    </div>
  );
};
