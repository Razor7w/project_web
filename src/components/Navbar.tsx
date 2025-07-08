import { NavLink, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove('email')
    navigate("/")
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-primary">
        <label className="navbar-brand text-light"><b>Mi Arriendo</b></label>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {location.pathname !== "/" && location.pathname !== "/Registrar" && (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink to="/Inicio" className="nav-link text-light">
                    Inicio
                  </NavLink>
                </li>
              </ul>
              <li className="nav-item p-2 d-flex">
                  <NavLink to="/cambiarContrasena" className="nav-link text-light">
                    Cambiar Contraseña
                  </NavLink>
              </li>
              <li className="nav-item p-2 d-flex">
                  <button className="nav-link text-light" onClick={() => logout()} >
                    Cerrar Sesion
                  </button>
              </li>
            </>
          )}
          
        </div>
      </div>
    </nav>
  );
}
