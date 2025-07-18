import { useScrollSnap } from '../../hooks/useScrollSnap';
import './proyectos.css';

export default function Proyectos({ title }: { title: string }) {
  document.title = title;
  const containerRef = useScrollSnap();

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg section proyectos-hero" style={{ backgroundImage: `url(/images/fondoProyectos.jpg)` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            MIS <span className="hero-highlight">PROYECTOS</span>
          </h1>
        </div>
      </div>
      <section className="content-section section proyectos-content">
        <div className="content-container">
          <p className="content-description">
            Esta sección está actualmente en desarrollo y será actualizada próximamente
            con una selección de mis proyectos más destacados.
            <br />
            Aquí podrás encontrar ejemplos de aplicaciones web, herramientas interactivas
            y soluciones tecnológicas que demuestran mis habilidades en desarrollo frontend.
            <br />
            Cada proyecto incluirá detalles técnicos, tecnologías utilizadas,
            desafíos superados y enlaces a repositorios o demos en vivo.
            <br />
            Disculpa las molestias. Pronto tendrás acceso a todo mi portafolio
            de proyectos con descripciones detalladas y ejemplos interactivos.
          </p>
          <div className="content-foto">
            <img
              className="content-foto-img"
              src="/images/seccion-construccion.jpg"
              alt="Sección en construcción"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
