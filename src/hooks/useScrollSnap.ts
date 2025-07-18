import { useEffect, useRef } from 'react';

export function useScrollSnap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let isScrolling = false;
    let hasSnapped = false; // Variable para controlar si ya se hizo el primer snap

    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;
      
      const viewportHeight = window.innerHeight;
      const currentScrollTop = container.scrollTop;
      
      // Resetear hasSnapped si estamos en la parte superior (por ejemplo, después de usar scroll-to-top)
      if (currentScrollTop < 50) {
        hasSnapped = false;
      }
      
      // Solo hacer snap si aún no se ha hecho y estamos en las dos primeras secciones
      if (!hasSnapped && currentScrollTop < viewportHeight) {
        e.preventDefault();
        isScrolling = true;

        let targetScrollTop;
        
        if (e.deltaY > 0) {
          // Scroll hacia abajo - ir a la segunda sección
          targetScrollTop = viewportHeight;
          hasSnapped = true; // Marcar que ya se hizo el snap
        } else {
          // Scroll hacia arriba - ir al inicio
          targetScrollTop = 0;
        }
        
        // Scroll inmediato sin animación para mayor precisión
        container.scrollTop = targetScrollTop;

        setTimeout(() => {
          isScrolling = false;
        }, 300);
      }
      // Solo permitir snap hacia arriba si estamos exactamente en la posición inicial del contenido
      else if (hasSnapped && Math.abs(currentScrollTop - viewportHeight) < 50 && e.deltaY < 0) {
        e.preventDefault();
        isScrolling = true;
        
        // Ir de vuelta al hero
        container.scrollTop = 0;
        hasSnapped = false; // Resetear para permitir snap hacia abajo de nuevo
        
        setTimeout(() => {
          isScrolling = false;
        }, 300);
      }
      // Si ya se hizo el snap y estamos scrolling hacia abajo, permitir scroll normal
      // No prevenir el evento, dejar que funcione normalmente
    };

    // Agregar listener para detectar cuando se usa scroll-to-top programáticamente
    const handleScroll = () => {
      const currentScrollTop = container.scrollTop;
      
      // Si detectamos que estamos en la parte superior, resetear el estado
      if (currentScrollTop < 50 && hasSnapped) {
        hasSnapped = false;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return containerRef;
}
