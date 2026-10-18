import React, { useEffect, useRef, useState } from 'react';

/**
 * SplitTextReveal - 1minus1 Polygon Mask Staggered Character / Word Reveal
 * Clips text and animates characters/words upward from a hidden polygon bounding box.
 */
export const SplitTextReveal = ({
  children,
  className = "",
  mode = "words", // 'words' | 'chars'
  delay = 0,
  stagger = 0.035,
  as: Component = "span",
}) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const text = typeof children === 'string' ? children : '';

  if (!text) {
    return <Component className={className}>{children}</Component>;
  }

  const items = mode === 'chars' ? text.split('') : text.split(' ');

  return (
    <Component
      ref={containerRef}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {items.map((item, index) => {
        const itemDelay = delay + index * stagger;
        return (
          <span
            key={index}
            className="inline-block overflow-hidden align-top"
            style={{ marginRight: mode === 'words' && index < items.length - 1 ? '0.28em' : undefined }}
          >
            <span
              className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
              style={{
                transform: isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, 115%, 0)',
                transitionDelay: `${itemDelay}s`,
              }}
            >
              {item === ' ' ? '\u00A0' : item}
            </span>
          </span>
        );
      })}
    </Component>
  );
};
