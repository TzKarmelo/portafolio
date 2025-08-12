import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import './ScrollToTop.css';
export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWaveActive, setIsWaveActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    setIsVisible(false);
  }, [location.pathname]);
  useEffect(() => {
    let scrollContainer: Element | Window | null = null;
    const findScrollContainer = (): Element | Window => {
      const candidates = [
        '.main-scroll-container',
        '.experiencia-content',
        '.content-section',
        '#root'
      ];
      for (const selector of candidates) {
        const element = document.querySelector(selector);
        if (element && element.scrollHeight > element.clientHeight + 10) {
          return element;
        }
      }
      if (document.documentElement.scrollHeight > window.innerHeight + 10) {
        return window;
      }
      return window;
    };
    const toggleVisibility = () => {
      scrollContainer = findScrollContainer();
      let scrollTop: number;
      if (scrollContainer === window) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      } else {
        scrollTop = (scrollContainer as Element).scrollTop;
      }
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    const setupScrollListener = () => {
      if (scrollContainer && scrollContainer !== window) {
        (scrollContainer as Element).removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
      scrollContainer = findScrollContainer();
      if (scrollContainer === window) {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
      } else {
        (scrollContainer as Element).addEventListener('scroll', toggleVisibility, { passive: true });
      }
      toggleVisibility();
    };
    const timeoutId = setTimeout(setupScrollListener, 100);
    return () => {
      clearTimeout(timeoutId);
      if (scrollContainer && scrollContainer !== window) {
        (scrollContainer as Element).removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [location.pathname]); // Dependencia en location.pathname para reconfigurar en cada cambio de ruta
  const scrollToTop = () => {
    setIsWaveActive(true);
    setTimeout(() => {
      setIsWaveActive(false);
    }, 1200);
    const candidates = [
      '.main-scroll-container',
      '.experiencia-content',
      '.content-section',
      '#root'
    ];
    let scrollContainer: Element | Window | null = null;
    for (const selector of candidates) {
      const element = document.querySelector(selector);
      if (element && element.scrollHeight > element.clientHeight + 10) {
        scrollContainer = element;
        break;
      }
    }
    if (!scrollContainer) {
      scrollContainer = document.documentElement.scrollHeight > window.innerHeight + 10 ? window : window;
    }
    if (scrollContainer === window) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      (scrollContainer as Element).scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  return (
    <button
      ref={buttonRef}
      className={`scroll-to-top ${isVisible ? 'visible' : ''} ${isWaveActive ? 'wave-active' : ''}`}
      onClick={scrollToTop}
      aria-label="Volver al inicio"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 14L12 9L17 14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
