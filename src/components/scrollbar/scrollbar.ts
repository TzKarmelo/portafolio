function createCSSScrollbar(): void {
  const scrollbar: HTMLDivElement = document.createElement('div');
  scrollbar.className = 'custom-scrollbar';
  const thumb: HTMLDivElement = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';
  scrollbar.appendChild(thumb);
  document.body.appendChild(scrollbar);
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
    if (document.documentElement.scrollHeight > window.innerHeight + 10) {
      return window;
    }
    return window;
  }
  let scrollTimeout: number | undefined;
  let isScrolling: boolean = false;
  let lastScrollTime: number = 0;
  let isUserScrolling: boolean = false; // Nueva variable para detectar scroll del usuario
  function activateScrollGlow(): void {
    const now: number = Date.now();
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
  function updateScrollbarWithGlow(): void {
    updateScrollbarPosition();
    isUserScrolling = true; // Marcar que es scroll del usuario
    activateScrollGlow();
  }
  function attachScrollEvents(): void {
    const container: Element | Window = findScrollContainer();
    window.removeEventListener('scroll', updateScrollbarWithGlow);
    window.removeEventListener('wheel', updateScrollbarWithGlow);
    document.removeEventListener('scroll', updateScrollbarWithGlow);
    window.removeEventListener('resize', updateScrollbarPosition);
    if (container === window) {
      window.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
      window.addEventListener('wheel', updateScrollbarWithGlow, { passive: true });
      document.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
    } else {
      const oldContainers: NodeList = document.querySelectorAll('.main-scroll-container, .experiencia-content, .content-section, #root');
      oldContainers.forEach((el: Node) => {
        const element = el as Element;
        element.removeEventListener('scroll', updateScrollbarWithGlow);
        element.removeEventListener('wheel', updateScrollbarWithGlow);
      });
      const containerElement = container as Element;
      containerElement.addEventListener('scroll', updateScrollbarWithGlow, { passive: true });
      containerElement.addEventListener('wheel', updateScrollbarWithGlow, { passive: true });
    }
    window.addEventListener('resize', updateScrollbarPosition);
  }
  attachScrollEvents();
  const positionInterval: number = setInterval(() => {
    updateScrollbarPosition();
  }, 100) as number;
  const eventsInterval: number = setInterval(() => {
    attachScrollEvents();
  }, 1000) as number;
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
  });
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
    if (container === window) {
      window.scrollTo(0, clampedScrollTop);
    } else {
      const containerElement = container as Element;
      containerElement.scrollTop = clampedScrollTop;
    }
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
  updateScrollbarPosition();
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
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createCSSScrollbar);
} else {
  createCSSScrollbar();
}
export default createCSSScrollbar;
