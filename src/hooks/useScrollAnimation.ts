import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const animateOnScroll = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(animateOnScroll, observerOptions);

    // Observe all elements with animation classes
    const elementsToAnimate = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    );

    elementsToAnimate.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elementsToAnimate.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
};