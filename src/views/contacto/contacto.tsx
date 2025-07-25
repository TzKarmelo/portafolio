import { useScrollSnap } from '../../hooks/useScrollSnap';
import './contacto.css';

export default function Contacto({ title }: { title: string }) {
  document.title = title;
  const containerRef = useScrollSnap();

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg section contacto-hero" style={{ backgroundImage: `url(/images/fondoContacto.jpg)` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            CONTACTA <span className="hero-highlight">CONMIGO</span>
          </h1>
        </div>
      </div>
      
      <section className="content-section section contacto-content">
        <div className="contacto-lista">
          
          <div className="contacto-item">
            <h3 className="contacto-titulo">Contáctame</h3>
            <div className="contacto-descripcion">
              <p>Estoy disponible para discutir nuevas oportunidades profesionales y proyectos colaborativos. No dudes en contactarme a través de cualquiera de los siguientes medios.</p>
            </div>
            
            <div className="contacto-info-grid">
              <div className="contacto-social-links">
                <a 
                  href="https://www.linkedin.com/in/javier-espinosa-alguacil" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contacto-social-link linkedin"
                  aria-label="LinkedIn"
                >
                  <div className="contacto-social-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div className="contacto-social-info">
                    <h4 className="contacto-social-title">LinkedIn</h4>
                    <p className="contacto-social-subtitle">Perfil profesional</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/TzKarmelo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contacto-social-link github"
                  aria-label="GitHub"
                >
                  <div className="contacto-social-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="contacto-social-info">
                    <h4 className="contacto-social-title">GitHub</h4>
                    <p className="contacto-social-subtitle">Repositorios de código</p>
                  </div>
                </a>
                
                <a 
                  href="mailto:tzrtzr@hotmail.com" 
                  className="contacto-social-link email"
                  aria-label="Email"
                >
                  <div className="contacto-social-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.98L12 10.49l9.384-6.669h.98c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </div>
                  <div className="contacto-social-info">
                    <h4 className="contacto-social-title">Email</h4>
                    <p className="contacto-social-subtitle">tzrtzr@hotmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="tel:+34630048672" 
                  className="contacto-social-link phone"
                  aria-label="Teléfono"
                >
                  <div className="contacto-social-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                  </div>
                  <div className="contacto-social-info">
                    <h4 className="contacto-social-title">Teléfono</h4>
                    <p className="contacto-social-subtitle">+34 630048672</p>
                  </div>
                </a>
                
                <a 
                  href="/CV_Javier_Espinosa_2025.pdf" 
                  download="CV_Javier_Espinosa_2025.pdf"
                  className="contacto-social-link cv"
                  aria-label="Descargar CV"
                >
                  <div className="contacto-social-icon">
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                      <path d="M12,11L16,15H13V19H11V15H8L12,11Z"/>
                    </svg>
                  </div>
                  <div className="contacto-social-info">
                    <h4 className="contacto-social-title">Descargar CV</h4>
                    <p className="contacto-social-subtitle">PDF - 2025</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
