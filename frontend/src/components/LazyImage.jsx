import { useState, useRef, useEffect } from 'react';

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholder = '/images/placeholder.jpg',
  threshold = 0.1,
  ...props 
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={imgRef} className={`lazy-image-container ${className}`}>
      {hasError ? (
        <div className="image-error">
          <span>❌</span>
          <p>Failed to load image</p>
        </div>
      ) : (
        <>
          {!isLoaded && (
            <div className="image-placeholder">
              <div className="placeholder-spinner"></div>
            </div>
          )}
          {isInView && (
            <img
              src={hasError ? placeholder : src}
              alt={alt}
              className={`lazy-image ${isLoaded ? 'loaded' : 'loading'}`}
              onLoad={handleLoad}
              onError={handleError}
              {...props}
            />
          )}
        </>
      )}
    </div>
  );
}

export function OptimizedProfileImage({ className = '', ...props }) {
  return (
    <LazyImage
      src="/images/profile_photo.png"
      alt="Nikhil Patil - Full Stack Developer"
      className={`profile-image ${className}`}
      {...props}
    />
  );
}

export { LazyImage };
