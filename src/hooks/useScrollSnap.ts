import { useEffect, useRef } from 'react';

export function useScrollSnap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let hasSnapped = false;

    const snapToSection = (targetTop: number) => {
      isScrolling = true;
      container.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
      
      setTimeout(() => {
        container.scrollTop = targetTop;
        isScrolling = false;
      }, 800);
    };

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      const viewportHeight = window.innerHeight;
      const currentScrollTop = container.scrollTop;
      
      if (currentScrollTop < 50) {
        hasSnapped = false;
      }
      
      if (!hasSnapped && currentScrollTop < viewportHeight * 0.5) {
        e.preventDefault();
        if (e.deltaY > 0) {
          snapToSection(viewportHeight);
          hasSnapped = true;
        } else {
          snapToSection(0);
        }
      } else if (hasSnapped && currentScrollTop >= viewportHeight * 0.5 && e.deltaY < 0) {
        e.preventDefault();
        snapToSection(0);
        hasSnapped = false;
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      
      if (Math.abs(deltaY) < 30) return;
      
      const viewportHeight = window.innerHeight;
      const currentScrollTop = container.scrollTop;
      
      if (currentScrollTop < 50) {
        hasSnapped = false;
      }
      
      if (!hasSnapped && currentScrollTop < viewportHeight * 0.5) {
        e.preventDefault();
        if (deltaY > 0) {
          snapToSection(viewportHeight);
          hasSnapped = true;
        } else {
          snapToSection(0);
        }
      } else if (hasSnapped && currentScrollTop >= viewportHeight * 0.5 && deltaY < 0) {
        e.preventDefault();
        snapToSection(0);
        hasSnapped = false;
      }
    };

    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      if (currentScrollTop < 50 && hasSnapped) {
        hasSnapped = false;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: true });
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return containerRef;
}
