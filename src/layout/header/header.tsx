import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

export default function BasicMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-logo">
        <img src="/icons/logo.png" alt="Logo Javier Espinosa" />
      </div>
      <button
        className={`hamburger${menuOpen ? ' open' : ''}`}
        onClick={handleMenuToggle}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`header-menu${menuOpen ? ' open' : ''}`}>
        <NavLink
          to="/sobre-mi"
          className={({ isActive }) =>
            'mui-button-root' + (isActive ? ' active' : '')
          }
          onClick={handleLinkClick}
        >
          Sobre mí
        </NavLink>
        <NavLink
          to="/formacion"
          className={({ isActive }) =>
            'mui-button-root' + (isActive ? ' active' : '')
          }
          onClick={handleLinkClick}
        >
          Formación
        </NavLink>
        <NavLink
          to="/experiencia"
          className={({ isActive }) =>
            'mui-button-root' + (isActive ? ' active' : '')
          }
          onClick={handleLinkClick}
        >
          Experiencia
        </NavLink>
        <NavLink
          to="/proyectos"
          className={({ isActive }) =>
            'mui-button-root' + (isActive ? ' active' : '')
          }
          onClick={handleLinkClick}
        >
          Proyectos
        </NavLink>
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            'mui-button-root' + (isActive ? ' active' : '')
          }
          onClick={handleLinkClick}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}
