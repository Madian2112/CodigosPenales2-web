import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">⚖</div>
          LegisHonduras
        </Link>

        <nav>
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

        <div className="auth-buttons">
          <Link to="/login" className="btn btn-outline">
            Iniciar Sesión
          </Link>
          <Link to="/registro" className="btn btn-primary">
            Registro
          </Link>
        </div>
      </div>
    </header>
  )
}
