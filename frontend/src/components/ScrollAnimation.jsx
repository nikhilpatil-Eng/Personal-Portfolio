import React from 'react';
import { useScrollAnimation } from '../hooks/useIntersectionObserver';

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = '',
  ...props 
}) {
  const { ref, className: animationClassName } = useScrollAnimation(`animate-${animation}`);

  return (
    <div 
      ref={ref}
      className={`${animationClassName} ${className}`}
      style={{ 
        animationDelay: delay ? `${delay}ms` : '0ms',
        animationFillMode: 'both'
      }}
      {...props}
    >
      {children}
    </div>
  );
}

// Animation presets
export const ANIMATIONS = {
  FADE_IN_UP: 'fade-in-up',
  FADE_IN_LEFT: 'fade-in-left',
  FADE_IN_RIGHT: 'fade-in-right',
  FADE_IN: 'fade-in',
  SCALE_IN: 'scale-in',
  SLIDE_IN_UP: 'slide-in-up'
};
