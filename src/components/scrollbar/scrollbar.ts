// Scrollbar personalizada con efecto Glass de Apple - TypeScript

function createCSSScrollbar(): void {
  // Crear elementos
  const scrollbar: HTMLDivElement = document.createElement('div');
  scrollbar.className = 'custom-scrollbar';

  const thumb: HTMLDivElement = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';

  scrollbar.appendChild(thumb);
  document.body.appendChild(scrollbar);

  // Función para encontrar el contenedor de scroll
  function findScrollContainer(): Element | Window {
    const candidates: string[] = [
      '.main-scroll-container',
      '.experiencia-content',
      '.content-section',
      '#root'
    ];
    
    for (const selector of candidates) {
      const element: Element | null = document.querySelector(selector);
      if (element && element.scrollHeight > element.clientHeight + 10) {
        return element;
      }
    }
    
    // Verificar document.documentElement
    if (document.documentElement.scrollHeight > window.innerHeight + 10) {
      return window;
    }
    
    return window;
  }
  
  // Variables para controlar el glow durante scroll
  let scrollTimeout: number | undefined;
  let isScrolling: boolean = false;
  let lastScrollTime: number = 0;
  let isUserScrolling: boolean = false; // Nueva variable para detectar scroll del usuario

  // Función para activar el glow SOLO durante scroll real del usuario
  function activateScrollGlow(): void {
    const now: number = Date.now();
    
    // Solo activar si ha pasado suficiente tiempo y es scroll real del usuario
    if (now - lastScrollTime > 50 && isUserScrolling) {
      if (!isScrolling) {
        isScrolling = true;
        thumb.classList.add('scrolling');
      }
      
      lastScrollTime = now;
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        isUserScrolling = false; // Reset cuando termina el scroll
        thumb.classList.remove('scrolling');
      }, 300) as number;
    }
  }
  
  // Función de actualización de posición (sin glow)
  function updateScrollbarPosition(): void {
    const container: Element | Window = findScrollContainer();
    let scrollTop: number, docHeight: number, winHeight: number;
    
    if (container === window) {
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      docHeight = document.documentElement.scrollHeight;
      winHeight = window.innerHeight;
    } else {
      const containerElement = container as Element;
      scrollTop = containerElement.scrollTop;
      docHeight = containerElement.scrollHeight;
      winHeight = containerElement.clientHeight;
    }
    
    if (docHeight <= winHeight + 10) {
      thumb.style.transform = 'translateY(0px)';
      return;
    }

    const scrollPercent: number = scrollTop / (docHeight - winHeight);
    const scrollbarHeight: number = scrollbar.clientHeight;
    const thumbHeight: number = 30;
    const maxMove: number = scrollbarHeight - thumbHeight;
    const thumbPos: number = Math.min(maxMove, Math.max(0, scrollPercent * maxMove));
    
    thumb.style.transform = `translateY(${thumbPos}px)`;
  }

  // Función de actualización con glow (SOLO para eventos de scroll real)
  function updateScrollbarWithGlow(): void {
    updateScrollbarPosition();
    isUserScrolling = true; // Marcar que es scroll del usuario
    activateScrollGlow();
  }
  
  // Función para agregar eventos
  function attachScrollEvents(): void {
    const container: Element | Window = findScrollContainer();
    
    // Remover eventos anteriores para evitar duplicados
    window.removeEventListener('scroll', updateScrollbarWithGlow);
    window.removeEventListener('wheel', updateScrollbarWithGlow);
    document.removeEventListener('scroll', updateScrollbarWithGlow);
    window.removeEventListener('resize', updateScrollbarPosition);
    
    if (container === window) {
      // Solo eventos de scroll/wheel activan el glow
      window.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
      window.addEventListener('wheel', updateScrollbarWithGlow, { passive: true });
      document.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
    } else {
      // Remover eventos del contenedor anterior si existe
      const oldContainers: NodeList = document.querySelectorAll('.main-scroll-container, .experiencia-content, .content-section, #root');
      oldContainers.forEach((el: Node) => {
        const element = el as Element;
        element.removeEventListener('scroll', updateScrollbarWithGlow);
        element.removeEventListener('wheel', updateScrollbarWithGlow);
      });
      
      // Solo eventos de scroll/wheel activan el glow
      const containerElement = container as Element;
      containerElement.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
      containerElement.addEventListener('wheel', updateScrollbarWithGlow, { passive: true });
    }
    
    // Resize solo actualiza posición, sin glow
    window.addEventListener('resize', updateScrollbarPosition);
  }
  
  // Agregar eventos
  attachScrollEvents();
  
  // Redetectar contenedor más frecuentemente para mejor respuesta (sin glow)
  const positionInterval: number = setInterval(() => {
    updateScrollbarPosition();
  }, 100) as number;
  
  // Redetectar contenedor solo cuando sea necesario
  const eventsInterval: number = setInterval(() => {
    attachScrollEvents();
  }, 1000) as number;
  
  // Click para navegar (SIN activar glow)
  scrollbar.addEventListener('click', function(e: MouseEvent): void {
    const container: Element | Window = findScrollContainer();
    const rect: DOMRect = this.getBoundingClientRect();
    const clickY: number = e.clientY - rect.top;
    const clickPercent: number = clickY / rect.height;
    
    let docHeight: number, winHeight: number;
    
    if (container === window) {
      docHeight = document.documentElement.scrollHeight;
      winHeight = window.innerHeight;
      const targetScroll: number = clickPercent * (docHeight - winHeight);
      window.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
    } else {
      const containerElement = container as Element;
      docHeight = containerElement.scrollHeight;
      winHeight = containerElement.clientHeight;
      const targetScroll: number = clickPercent * (docHeight - winHeight);
      containerElement.scrollTo({ top: Math.max(0, targetScroll), behavior: 'smooth' });
    }
    // NO llamar activateScrollGlow() aquí - es navegación programática
  });
  
  // Funcionalidad de arrastre del thumb
  let isDragging: boolean = false;
  let dragStartY: number = 0;
  let scrollStartTop: number = 0;

  thumb.addEventListener('mousedown', function(e: MouseEvent): void {
    e.preventDefault();
    isDragging = true;
    dragStartY = e.clientY;
    
    const container: Element | Window = findScrollContainer();
    if (container === window) {
      scrollStartTop = window.pageYOffset || document.documentElement.scrollTop;
    } else {
      const containerElement = container as Element;
      scrollStartTop = containerElement.scrollTop;
    }
    
    // Agregar clase de arrastre para efectos visuales
    thumb.classList.add('dragging');
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  });

  document.addEventListener('mousemove', function(e: MouseEvent): void {
    if (!isDragging) return;
    
    e.preventDefault();
    const container: Element | Window = findScrollContainer();
    const scrollbarRect: DOMRect = scrollbar.getBoundingClientRect();
    const deltaY: number = e.clientY - dragStartY;
    const scrollbarHeight: number = scrollbarRect.height;
    const thumbHeight: number = 30;
    const maxMove: number = scrollbarHeight - thumbHeight;
    
    // Calcular el porcentaje de movimiento
    const movePercent: number = deltaY / maxMove;
    
    let docHeight: number, winHeight: number;
    if (container === window) {
      docHeight = document.documentElement.scrollHeight;
      winHeight = window.innerHeight;
    } else {
      const containerElement = container as Element;
      docHeight = containerElement.scrollHeight;
      winHeight = containerElement.clientHeight;
    }
    
    const maxScroll: number = docHeight - winHeight;
    const newScrollTop: number = scrollStartTop + (movePercent * maxScroll);
    const clampedScrollTop: number = Math.max(0, Math.min(maxScroll, newScrollTop));
    
    // Aplicar el scroll
    if (container === window) {
      window.scrollTo(0, clampedScrollTop);
    } else {
      const containerElement = container as Element;
      containerElement.scrollTop = clampedScrollTop;
    }
    
    // NO activar glow durante arrastre - es navegación manual
    // Solo actualizar posición visual
    updateScrollbarPosition();
  });

  document.addEventListener('mouseup', function(): void {
    if (isDragging) {
      isDragging = false;
      thumb.classList.remove('dragging');
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    }
  });
  
  // Inicializar (sin glow)
  updateScrollbarPosition();
  
  // Detectar cambios de página en React Router
  let currentPath: string = window.location.pathname;
  const routerInterval: number = setInterval(() => {
    if (window.location.pathname !== currentPath) {
      currentPath = window.location.pathname;
      setTimeout(() => {
        attachScrollEvents();
        updateScrollbarPosition(); // Solo actualizar posición, sin glow
      }, 100); // Pequeño delay para que React Router termine de cargar
    }
  }, 50) as number;

  // Función de limpieza para desarrollo (opcional)
  (window as unknown as { __cleanupScrollbar?: () => void }).__cleanupScrollbar = () => {
    clearInterval(positionInterval);
    clearInterval(eventsInterval);
    clearInterval(routerInterval);
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollbar.remove();
  };
}

// Ejecutar cuando DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createCSSScrollbar);
} else {
  createCSSScrollbar();
}

export default createCSSScrollbar;
