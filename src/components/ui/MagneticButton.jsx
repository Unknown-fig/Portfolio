import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const MagneticButton = ({
  children,
  className = '',
  strength = 0.35,
  onClick,
  href,
  target,
  rel,
  type = 'button',
  disabled = false,
  ...props
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const el = buttonRef.current;
    if (!el || disabled) return;

    let bounds = el.getBoundingClientRect();

    const handleMouseMove = (e) => {
      bounds = el.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.75,
        ease: 'elastic.out(1.15, 0.4)', // 1minus1 style snappy elastic return
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.killTweensOf(el);
    };
  }, [strength, disabled]);

  if (href) {
    return (
      <a
        ref={buttonRef}
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={`inline-block will-change-transform ${className}`}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={buttonRef}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`inline-block will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
