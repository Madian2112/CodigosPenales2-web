import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/" className="logo">
            <div className="logo-icon">⚖</div>
            LegisHonduras
          </Link>

          <nav className="nav-desktop">
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
            </ul>
          </nav>

          <button className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`menu-overlay ${isMenuOpen ? "active" : ""}`} onClick={() => setIsMenuOpen(false)}></div>

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
        </ul>
      </div>
    </>
  );
}
