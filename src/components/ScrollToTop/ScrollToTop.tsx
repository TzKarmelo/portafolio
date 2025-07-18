import { useState, useEffect, useRef } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isWaveActive, setIsWaveActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let scrollContainer: Element | Window | null = null;

    const findScrollContainer = (): Element | Window => {
      // Intentar encontrar el contenedor de scroll dinámicamente
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
      
      // Verificar document.documentElement
      if (document.documentElement.scrollHeight > window.innerHeight + 10) {
        return window;
      }
      
      return window;
    };

    const toggleVisibility = () => {
      // Redetectar el contenedor en cada scroll para mayor fiabilidad
      scrollContainer = findScrollContainer();
      
      let scrollTop: number;
      if (scrollContainer === window) {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      } else {
        scrollTop = (scrollContainer as Element).scrollTop;
      }
      
      // Mostrar el botón cuando se haya bajado más de 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const setupScrollListener = () => {
      // Limpiar listeners anteriores
      if (scrollContainer && scrollContainer !== window) {
        (scrollContainer as Element).removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);

      // Encontrar y configurar el nuevo contenedor
      scrollContainer = findScrollContainer();
      
      if (scrollContainer === window) {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
      } else {
        (scrollContainer as Element).addEventListener('scroll', toggleVisibility, { passive: true });
      }
    };

    // Configurar listener inicial
    setupScrollListener();
    
    // Reconfigurar listener cada cierto tiempo para detectar cambios de página
    const interval = setInterval(setupScrollListener, 1000);

    // Limpiar al desmontar
    return () => {
      clearInterval(interval);
      if (scrollContainer && scrollContainer !== window) {
        (scrollContainer as Element).removeEventListener('scroll', toggleVisibility);
      }
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    // Activar efecto de onda de luz
    setIsWaveActive(true);
    
    // Desactivar el efecto después de la animación
    setTimeout(() => {
      setIsWaveActive(false);
    }, 1200);

    // Usar la misma lógica de detección que en useEffect
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
