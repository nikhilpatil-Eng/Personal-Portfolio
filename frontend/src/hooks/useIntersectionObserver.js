import { useState, useEffect, useRef } from 'react';

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        
        // Set hasIntersected to true once (for one-time animations)
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
        ...options
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin, hasIntersected]);

  return [ref, isIntersecting, hasIntersected];
}

export function useScrollAnimation(animationClass = 'animate-in') {
  const [ref, isInView, hasIntersected] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  return {
    ref,
    className: hasIntersected ? animationClass : '',
    isInView,
    hasIntersected
  };
}
