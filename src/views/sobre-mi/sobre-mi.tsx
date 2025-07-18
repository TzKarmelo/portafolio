import { useRef, useEffect } from "react";
import { useScrollSnap } from '../../hooks/useScrollSnap';
import "./sobre-mi.css";
import fondoSobremi from '/images/fondoSobremi.jpg';

export default function SobreMi({ title }: { title: string }) {
  document.title = title;
  const fotoRef = useRef<HTMLDivElement>(null);
  const containerRef = useScrollSnap();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      },
      {
        threshold: 0.1, // La animación se activa cuando el 10% de la imagen es visible
        rootMargin: "0px 0px -50px 0px", // Margen adicional para activar la animación antes
      }
    );

    const currentFotoRef = fotoRef.current;

    if (currentFotoRef) {
      observer.observe(currentFotoRef);
    }

    return () => {
      if (currentFotoRef) {
        observer.unobserve(currentFotoRef);
      }
    };
  }, []);

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg hero-bg-sobre-mi section sobre-mi-hero" style={{ backgroundImage: `url(${fondoSobremi})` }}>
        <div className="hero-content">
          <span className="hero-welcome">Bienvenido a</span>
          <h1 className="hero-title">
            MI <span className="hero-highlight">PORTAFOLIO</span>
          </h1>
          <h2 className="hero-name">Javier Espinosa</h2>
        </div>
      </div>

      <section className="content-section section sobre-mi-content">
        <div className="content-container">
          <p className="content-description">
            Soy un apasionado del{" "}
            <span className="content-keyword">desarrollo web</span>{" "}y la{" "}
            <span className="content-keyword">programación</span>, siempre en
            constante aprendizaje de nuevas tecnologías y en búsqueda de
            oportunidades para potenciar mis habilidades profesionales.
            Especializado en el desarrollo de aplicaciones web front-end con{" "}
            <span className="content-keyword">React</span>{" "}y{" "}
            <span className="content-keyword">TypeScript</span>, disfruto
            creando soluciones eficientes y resolviendo problemas complejos
            mediante un{" "}
            <span className="content-keyword">código limpio</span>{" "}y mantenible.
            <br />
            <br />
            Me destaco por mi{" "}
            <span className="content-keyword">organización</span>, atención al{" "}
            <span className="content-keyword">detalle</span> y{" "}
            <span className="content-keyword">responsabilidad</span> en cada
            etapa del desarrollo. Trabajo con herramientas modernas como{" "}
            <span className="content-keyword">Zustand</span>,{" "}
            <span className="content-keyword">ESLint</span>,{" "}
            <span className="content-keyword">Stylelint</span>,{" "}
            <span className="content-keyword">Prettier</span> y{" "}
            <span className="content-keyword">Husky</span> para asegurar la
            calidad del código.
            <br />
            <br />
            Además, manejo{" "}
            <span className="content-keyword">Git</span>{" "}como sistema de control
            de versiones y aplico{" "}
            <span className="content-keyword">metodologías ágiles</span> (
            <span className="content-keyword">Scrum</span>,{" "}
            <span className="content-keyword">Kanban</span>,{" "}
            <span className="content-keyword">Dailys</span>) para optimizar la{" "}
            <span className="content-keyword">colaboración</span> y la{" "}
            <span className="content-keyword">entrega continua</span>.
          </p>
          <div className="content-foto" ref={fotoRef}>
            <img
              className="content-foto-img"
              src="/images/foto-1018x1024.jpg"
              alt="Foto de Javier Espinosa"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
