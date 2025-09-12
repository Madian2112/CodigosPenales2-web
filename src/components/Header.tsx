import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">⚖</div>
          LegisHonduras
        </Link>

        <nav className={`nav-desktop ${isMenuOpen ? "hidden" : ""}`}>
          <ul className="nav">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/leyes">Leyes</Link>
            </li>
            <li>
              <Link to="/codigos">Códigos</Link>
            </li>
            <li>
              <Link to="/documentos">Documentos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </nav>

        <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`nav-mobile ${isMenuOpen ? "active" : ""}`}>
        <ul className="nav">
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          </li>
          <li>
            <Link to="/leyes" onClick={() => setIsMenuOpen(false)}>Leyes</Link>
          </li>
          <li>
            <Link to="/codigos" onClick={() => setIsMenuOpen(false)}>Códigos</Link>
          </li>
          <li>
            <Link to="/documentos" onClick={() => setIsMenuOpen(false)}>Documentos</Link>
          </li>
          <li>
            <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
