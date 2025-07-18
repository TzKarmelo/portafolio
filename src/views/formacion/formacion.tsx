import { useScrollSnap } from '../../hooks/useScrollSnap';
import './formacion.css';
import fondoFormacion from '/images/fondoFormacion.png';

export default function Formacion({ title }: { title: string }) {
  document.title = title;
  const containerRef = useScrollSnap();

  return (
    <div className="main-scroll-container" ref={containerRef}>
      <div className="hero-bg section formacion-hero" style={{ backgroundImage: `url(${fondoFormacion})` }}>
        <div className="hero-content">
          <h1 className="hero-title">
            FORMACIÓN <span className="hero-highlight">ACADÉMICA</span>
          </h1>
        </div>
      </div>
      <section className="content-section section formacion-content">
        <div className="formacion-lista">
          
          <div className="formacion-item">
            <h3 className="formacion-titulo">Bootcamp Java – Softtek</h3>
            <p className="formacion-institucion hackaboss">
              <img src="/icons/hackaboss-logo.svg" alt="HackABoss" className="institucion-logo" />
              HackABoss, 2023
            </p>
            <div className="formacion-descripcion">
              <p>Participante del bootcamp de HackaBoss para Softtek, un programa intensivo diseñado para el desarrollo integral de habilidades JAVA para poder acceder a la multinacional Softtek.</p>
              <p>Adquisición experiencia práctica en tecnologías de vanguardia, metodologías ágiles y gestión de proyectos mediante la colaboración en proyectos reales.</p>
              <p>Fortalecí mis habilidades de trabajo en equipo, comunicación efectiva y resolución de problemas, demostrando capacidad para enfrentar desafíos técnicos y liderar en entornos dinámicos.</p>
              <p>Esta experiencia consolidó mi compromiso con el aprendizaje continuo y mi preparación para aportar valor en un ambiente laboral diverso y desafiante.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">Java</span>
              <span className="formacion-habilidad">Spring Boot</span>
              <span className="formacion-habilidad">GitHub</span>
              <span className="formacion-habilidad">MySQL</span>
              <span className="formacion-habilidad">Postman</span>
            </div>
          </div>

          <div className="formacion-item">
            <h3 className="formacion-titulo">Introducción & Fundamentos de Administración de Salesforce CRM</h3>
            <p className="formacion-institucion fci">
              <img src="/icons/fci-logo.svg" alt="FCI" className="institucion-logo" />
              FCI, 2023
            </p>
            <div className="formacion-descripcion">
              <p>Adquirir los conocimientos iniciales para habilitar al alumno en el funcionamiento de la tecnología Salesforce desde el inicio y su utilización en procesos de negocio reales.</p>
              <p>Adquirir los conocimientos iniciales para aprender cómo configurar Salesforce desde cero.</p>
              <p>La certificación de administrador Salesforce, es una titulación oficial, que verifica los conocimientos necesarios que el usuario dispone para saber gestionar desde la administración del CRM Salesforce.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">Salesforce</span>
              <span className="formacion-habilidad">CRM</span>
              <span className="formacion-habilidad">Administración</span>
            </div>
          </div>

          <div className="formacion-item">
            <h3 className="formacion-titulo">IFCD0210 Desarrollo De Aplicaciones Con Tecnologías WEB ( DAW )</h3>
            <p className="formacion-institucion inkor">
              <img src="/icons/inkor-logo.svg" alt="INKOR" className="institucion-logo" />
              Centro Estudios INKOR, 2022-23
            </p>
            <div className="formacion-descripcion">
              <p>Lenguajes Web: Experiencia en HTML, CSS y JavaScript para el desarrollo de sitios web atractivos y funcionales.</p>
              <p>Desarrollo del Lado del Servidor: Competencia en PHP y MySQL para la gestión eficaz de datos y la creación de aplicaciones web dinámicas.</p>
              <p>Tecnologías Front-End: Destreza en Bootstrap para crear interfaces de usuario modernas y receptivas.</p>
              <p>API y Colaboración: Conocimiento sólido en la creación y consumo de API REST y colaboración con GitHub.</p>
              <p>Gestión de Contenido: Experiencia en WordPress y Elementor para el desarrollo de sitios web de alto rendimiento.</p>
              <p>Comercio Electrónico: Habilidad en la creación de tiendas en línea utilizando Shopify.</p>
              <p>Herramientas de Desarrollo: Uso efectivo de herramientas como Postman y Visual Studio Code.</p>
            </div>
            <div className="formacion-destacado">              
              <p><strong>Experiencia Laboral:</strong> OPTIMOCLICK donde participé en maquetación y diseño receptivo, la creación de páginas Landing con WordPress, Elementor y Shopify, y la interacción con API utilizando Postman.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">HTML</span>
              <span className="formacion-habilidad">CSS</span>
              <span className="formacion-habilidad">JavaScript</span>
              <span className="formacion-habilidad">PHP</span>
              <span className="formacion-habilidad">MySQL</span>
              <span className="formacion-habilidad">Bootstrap</span>
              <span className="formacion-habilidad">WordPress</span>
              <span className="formacion-habilidad">Elementor</span>
              <span className="formacion-habilidad">Shopify</span>
              <span className="formacion-habilidad">API REST</span>
              <span className="formacion-habilidad">Postman</span>
              <span className="formacion-habilidad">Visual Studio Code</span>
            </div>
          </div>

          <div className="formacion-item">
            <h3 className="formacion-titulo">IFCD163 Fundamentos de Programación PYTHON</h3>
            <p className="formacion-institucion nascor">
              <img src="/icons/nascor-logo.svg" alt="Nascor" className="institucion-logo" />
              Curso oficial PCAP Centro Nascor, 2022
            </p>
            <div className="formacion-descripcion">
              <p>Diseño Lógico: Capacidad para diseñar programas con estructuras de decisión y bucles para controlar el flujo de ejecución del software.</p>
              <p>Organización del Código: Competencia en la construcción de módulos y paquetes para mantener un código organizado y fácil de mantener.</p>
              <p>Programación Orientada a Objetos (POO): Conocimiento de las bases de la programación orientada a objetos y la capacidad para crear y utilizar clases y objetos.</p>
              <p>Manipulación de Referencias a Objetos: Habilidad para utilizar y manipular referencias a objetos en la programación.</p>
              <p>Gestión de Errores: Experiencia en la escritura de código de manejo de errores para garantizar la robustez y la confiabilidad del software.</p>
              <p>Manipulación de Archivos: Competencia en la manipulación de archivos, incluida la lectura, escritura y gestión de archivos en un entorno de programación.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">Python</span>
              <span className="formacion-habilidad">POO</span>
              <span className="formacion-habilidad">Módulos</span>
              <span className="formacion-habilidad">Manejo de Errores</span>
              <span className="formacion-habilidad">Manipulación de Archivos</span>
            </div>
          </div>

          <div className="formacion-item">
            <h3 className="formacion-titulo">IFCT0309 Certificado Profesional Montaje y Reparación de Sistemas Microinformáticos e Impresoras</h3>
            <p className="formacion-institucion violeta">
              <img src="/icons/violeta-logo.svg" alt="La Violeta" className="institucion-logo" />
              CIFO La Violeta, 2021-22
            </p>
            <div className="formacion-descripcion">
              <p>Montaje y Reparación de Sistemas Microinformáticos: Capacidad para montar, reparar y ampliar equipos y componentes que componen un sistema microinformático, asegurando su funcionamiento y solucionando averías tanto a nivel de hardware como de software.</p>
              <p>Verificación de la Ausencia de Interferencias: Habilidad para garantizar que no existan interferencias entre los componentes de un sistema informático, lo que es esencial para su correcto funcionamiento.</p>
              <p>Diagnóstico y Resolución de Averías: Competencia en la detección de averías tanto a nivel de hardware como de software, así como la aplicación de procedimientos correctivos para resolver los problemas.</p>
            </div>
            <div className="formacion-destacado">
              <p><strong>Experiencia Práctica:</strong> COM2 donde realicé tareas de reparación, desmontaje y mantenimiento de equipos informáticos, lo que proporciona una experiencia práctica valiosa en el campo.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">Hardware</span>
              <span className="formacion-habilidad">Software</span>
              <span className="formacion-habilidad">Reparación</span>
              <span className="formacion-habilidad">Mantenimiento</span>
              <span className="formacion-habilidad">Diagnóstico</span>
            </div>
          </div>

          <div className="formacion-item">
            <h3 className="formacion-titulo">IFCT0209 Certificado Profesional Sistemas Microinformáticos y Redes</h3>
            <p className="formacion-institucion stucom">
              <img src="/icons/stucom-logo.svg" alt="STUCOM" className="institucion-logo" />
              Grado 2 STUCOM – CESF, 2020-21
            </p>
            <div className="formacion-descripcion">
              <p>Instalación y Configuración de Sistemas Microinformáticos: Capacidad para instalar, configurar y mantener sistemas microinformáticos para su uso en entornos corporativos y organizacionales.</p>
              <p>Soporte al Usuario: Habilidad para proporcionar soporte técnico a los usuarios, ayudándoles en el manejo de aplicaciones y resolviendo problemas técnicos relacionados con sistemas informáticos.</p>
              <p>Administración de Redes: Experiencia en instalación y configuración de redes LAN, incluyendo cableado estructurado y crimpado de conectores.</p>
              <p>Helpdesk y Soporte Técnico: Competencia en la resolución de incidencias informáticas y atención al usuario final en entornos educativos y empresariales.</p>
            </div>
            <div className="formacion-destacado">
              <p><strong>Experiencia Práctica:</strong> EUROAULA Escuela Universitaria como Helpdesk - Administrador de sistemas, donde realicé tareas de soporte técnico, administración de sistemas e instalación de red LAN en aulas, incluyendo cableado estructurado y crimpado de conectores.</p>
            </div>
            <div className="formacion-habilidades">
              <span className="formacion-habilidad">Sistemas Microinformáticos</span>
              <span className="formacion-habilidad">Redes LAN</span>
              <span className="formacion-habilidad">Helpdesk</span>
              <span className="formacion-habilidad">Cableado Estructurado</span>
              <span className="formacion-habilidad">Crimpado</span>
              <span className="formacion-habilidad">Soporte Técnico</span>
              <span className="formacion-habilidad">Administración de Sistemas</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}