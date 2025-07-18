import { useScrollSnap } from '../../hooks/useScrollSnap';
import './contacto.css';
import fondoContacto from '/images/fondoContacto.jpg';

export default function Contacto({ title }: { title: string }) {
  document.title = title;
  const containerRef = useScrollSnap();

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg section contacto-hero" style={{ backgroundImage: `url(${fondoContacto})` }}>
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
              <div className="contacto-info-item">
                <div className="contacto-detalle">
                  <div className="contacto-icon">📍</div>
                  <div className="contacto-info-content">
                    <h4 className="contacto-subtitle">Ubicación</h4>
                    <p className="contacto-value">Carrer de José Millán González, 11<br />Horta-Guinardó, 08024 Barcelona</p>
                  </div>
                </div>
              </div>

              <div className="contacto-info-item">
                <div className="contacto-detalle">
                  <div className="contacto-icon">✉️</div>
                  <div className="contacto-info-content">
                    <h4 className="contacto-subtitle">Email</h4>
                    <p className="contacto-value">tzrtzr@hotmail.com</p>
                  </div>
                </div>
              </div>

              <div className="contacto-info-item">
                <div className="contacto-detalle">
                  <div className="contacto-icon">📱</div>
                  <div className="contacto-info-content">
                    <h4 className="contacto-subtitle">Teléfono</h4>
                    <p className="contacto-value">+34 630048672</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contacto-item contacto-mapa-item">
            <h4 className="contacto-subtitle-mapa">Encuéntrame aquí</h4>
            <div className="contacto-mapa">
              <iframe
                src="https://maps.google.com/maps?q=Carrer+de+José+Millán+González+11,+Horta-Guinardó,+08024+Barcelona,+Spain&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación en Carrer de José Millán González, Barcelona"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
