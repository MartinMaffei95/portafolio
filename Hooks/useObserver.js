import { useState, useEffect } from 'react';

export const useObserver = (ref, rootMargin = 0) => {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );
    if (ref?.current) {
      return observer?.observe(ref.current);
    }
    return () => {
      observer?.unobserve(ref.current);
    };
  }, []);

  return isIntersecting;
};
