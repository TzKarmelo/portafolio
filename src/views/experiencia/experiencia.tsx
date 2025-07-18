import { useScrollSnap } from '../../hooks/useScrollSnap';
import './experiencia.css';

export default function Experiencia({ title }: { title: string }) {
  document.title = title;
  const containerRef = useScrollSnap();

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg section experiencia-hero" style={{ backgroundImage: `url(/images/fondoExperiencia.webp)` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            MI <span className="hero-highlight">EXPERIENCIA</span>
          </h1>
        </div>
      </div>
      <section className="content-section section experiencia-content">
        <div className="experiencia-grid">
          {/* Bloque Softtek */}
          <div className="experiencia-block">
            <div className="experiencia-header">
              <div className="experiencia-logo">
                <img 
                  src="/icons/Softtek-logo.png" 
                  alt="Softtek" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="experiencia-info">
                <h3 className="experiencia-title">Desarrollador de Software</h3>
                <h4 className="experiencia-institution">Softtek</h4>
                <p className="experiencia-date">Octubre 2024 - Julio 2025</p>
                <p className="experiencia-location">Barcelona, Cataluña, España · Híbrido</p>
              </div>
            </div>
            <div className="experiencia-description">
              <p>
                Como desarrollador de software en Softtek, una empresa líder en servicios de TI 
                a nivel global, participé en proyectos de gran envergadura desarrollando aplicaciones 
                web robustas y escalables. Mi trabajo se centró en el ecosistema de React y TypeScript, 
                implementando arquitecturas modernas que garantizan la mantenibilidad y performance 
                del código. Colaboré estrechamente con equipos multidisciplinarios, incluyendo 
                diseñadores UX/UI, product managers y otros desarrolladores, siguiendo metodologías 
                ágiles para entregar soluciones de alta calidad en tiempos optimizados.
              </p>
            </div>
            <div className="experiencia-highlighted">
              <p>
                <strong>Responsabilidades principales:</strong> Desarrollo de componentes React 
                reutilizables con TypeScript, implementación de state management con Zustand, 
                configuración de pipelines de CI/CD, aplicación de metodologías Scrum y Kanban, 
                code reviews y mentoring a desarrolladores junior, optimización de performance 
                y SEO, testing automatizado, y mantenimiento de estándares de código con ESLint, 
                Prettier y Stylelint integrados con Husky para pre-commit hooks.
              </p>
            </div>
            <div className="experiencia-skills">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Scrum</span>
              <span className="skill-tag">Agile</span>
              <span className="skill-tag">Vite</span>
              <span className="skill-tag">Prettier</span>
              <span className="skill-tag">ESLint</span>
              <span className="skill-tag">Stylelint</span>
              <span className="skill-tag">Husky</span>
              <span className="skill-tag">Kanban</span>
              <span className="skill-tag">Zustand</span>
            </div>
          </div>

          {/* Bloque Pentrilo */}
          <div className="experiencia-block">
            <div className="experiencia-header">
              <div className="experiencia-logo">
                <img 
                  src="/icons/pentrilo-logo.png" 
                  alt="Pentrilo" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="experiencia-info">
                <h3 className="experiencia-title">Desarrollador Web</h3>
                <h4 className="experiencia-institution">Pentrilo | Herramientas para pintar</h4>
                <p className="experiencia-date">Junio 2023 - Julio 2023</p>
                <p className="experiencia-location">Sant Joan Despí, Cataluña, España · Presencial</p>
              </div>
            </div>
            <div className="experiencia-description">
              <p>
                Durante mi período de prácticas en Pentrilo, empresa especializada en herramientas 
                y productos para el sector de la pintura profesional, tuve la oportunidad de 
                liderar el rediseño completo de su intranet corporativa. Este proyecto estratégico 
                buscaba modernizar los procesos internos y mejorar significativamente la experiencia 
                de usuario para más de 50 empleados. Trabajé directamente con diferentes departamentos 
                para entender sus necesidades específicas, diseñando soluciones personalizadas que 
                optimizaran sus flujos de trabajo diarios y mejoraran la comunicación interdepartamental.
              </p>
            </div>
            <div className="experiencia-highlighted">
              <p>
                <strong>Proyecto principal:</strong> Análisis de requisitos funcionales y técnicos, 
                diseño de wireframes y prototipos interactivos, desarrollo full-stack de la nueva 
                intranet con tecnologías web modernas, implementación de sistema de gestión de 
                inventario, módulo de comunicaciones internas, dashboard ejecutivo con métricas 
                en tiempo real, y capacitación del personal en el uso de la nueva plataforma. 
                El proyecto resultó en una mejora del 40% en la eficiencia de procesos internos.
              </p>
            </div>
            <div className="experiencia-skills">
              <span className="skill-tag">Desarrollo Web</span>
              <span className="skill-tag">Maquetación</span>
              <span className="skill-tag">Intranet</span>
              <span className="skill-tag">UI/UX</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>

          {/* Bloque OptimoClick */}
          <div className="experiencia-block">
            <div className="experiencia-header">
              <div className="experiencia-logo">
                <img 
                  src="/icons/optimoclick-logo.png" 
                  alt="OptimoClick" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="experiencia-info">
                <h3 className="experiencia-title">Desarrollador Web</h3>
                <h4 className="experiencia-institution">OptimoClick | Full Cycle Marketing Agency</h4>
                <p className="experiencia-date">Mayo 2022 - Julio 2022</p>
                <p className="experiencia-location">Barcelona, Cataluña, España · Presencial</p>
              </div>
            </div>
            <div className="experiencia-description">
              <p>
                En OptimoClick, una agencia de marketing digital de ciclo completo, desarrollé 
                habilidades especializadas en el ecosistema de e-commerce y marketing digital. 
                Mi rol abarcó desde la conceptualización hasta la implementación de sitios web 
                comerciales, trabajando con clientes de diversos sectores para crear presencias 
                digitales que convirtieran visitantes en clientes. Utilicé WordPress como CMS 
                principal, Elementor para diseños avanzados, y Shopify para tiendas online, 
                siempre priorizando la experiencia de usuario y la optimización para conversiones. 
                Además, integré múltiples APIs de terceros para funcionalidades avanzadas como 
                pasarelas de pago, sistemas de inventario y herramientas de analytics.
              </p>
            </div>
            <div className="experiencia-highlighted">
              <p>
                <strong>Logros destacados:</strong> Desarrollo de +15 sitios web comerciales con 
                tasas de conversión superiores al promedio del sector, implementación de tiendas 
                Shopify con integraciones personalizadas de inventario y CRM, creación de landing 
                pages optimizadas para campañas SEM/SEO que generaron un incremento del 25% en 
                leads calificados, configuración de APIs RESTful para sincronización de datos 
                entre plataformas, y documentación técnica completa utilizando Postman para 
                facilitar el mantenimiento futuro de las integraciones.
              </p>
            </div>
            <div className="experiencia-skills">
              <span className="skill-tag">WordPress</span>
              <span className="skill-tag">Elementor</span>
              <span className="skill-tag">Shopify</span>
              <span className="skill-tag">Diseño Responsive</span>
              <span className="skill-tag">API Integration</span>
              <span className="skill-tag">Postman</span>
              <span className="skill-tag">Maquetación</span>
              <span className="skill-tag">Marketing Digital</span>
            </div>
          </div>

          {/* Bloque EUROAULA */}
          <div className="experiencia-block">
            <div className="experiencia-header">
              <div className="experiencia-logo">
                <img 
                  src="/icons/euroaula-logo.png" 
                  alt="EUROAULA" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <div className="experiencia-info">
                <h3 className="experiencia-title">Helpdesk - Administrador de Sistemas</h3>
                <h4 className="experiencia-institution">EUROAULA Escuela Universitaria</h4>
                <p className="experiencia-date">Abril 2021 - Junio 2021</p>
                <p className="experiencia-location">Barcelona, Cataluña, España · Presencial</p>
              </div>
            </div>
            <div className="experiencia-description">
              <p>
                Mi experiencia en EUROAULA Escuela Universitaria marcó mi primer contacto 
                profesional con el mundo de la tecnología empresarial. Como técnico en informática 
                y helpdesk, fui responsable de mantener la infraestructura tecnológica que 
                soportaba las actividades académicas de la institución. Mi trabajo incluyó desde 
                la resolución de incidencias de usuarios hasta proyectos de infraestructura de 
                red más complejos. Participé activamente en la instalación de una nueva red LAN 
                en las aulas de informática, proyecto que requería planificación detallada, 
                coordinación con contratistas, y minimización del impacto en las actividades 
                docentes. Esta experiencia me proporcionó una base sólida en administración 
                de sistemas y me enseñó la importancia del soporte técnico de calidad.
              </p>
            </div>
            <div className="experiencia-highlighted">
              <p>
                <strong>Funciones principales:</strong> Atención personalizada de helpdesk para 
                +200 usuarios (estudiantes, profesores y personal administrativo), diagnóstico 
                y resolución de incidencias hardware/software, instalación y configuración de 
                red LAN en 3 aulas de informática incluyendo diseño de topología, tendido de 
                cableado estructurado Cat6, crimpado de conectores RJ45, configuración de switches 
                y puntos de acceso, administración de servidores Windows Server, gestión de Active 
                Directory, mantenimiento preventivo y correctivo de +100 equipos informáticos, 
                y documentación de procedimientos técnicos para futuros mantenimientos.
              </p>
            </div>
            <div className="experiencia-skills">
              <span className="skill-tag">Helpdesk</span>
              <span className="skill-tag">Administración de Sistemas</span>
              <span className="skill-tag">Redes LAN</span>
              <span className="skill-tag">Cableado Estructurado</span>
              <span className="skill-tag">Crimpado</span>
              <span className="skill-tag">Soporte Técnico</span>
              <span className="skill-tag">Mantenimiento de Equipos</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}