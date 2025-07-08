import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
   const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid bg-primary">
        <label className="navbar-brand text-light">Mi Arriendo</label>
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
          {location.pathname !== "/" && (
            <>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <NavLink to="/Inicio" className="nav-link text-light">
                    Inicio
                  </NavLink>
                </li>
              </ul>
              <li className="nav-item d-flex ">
                <button className="nav-link  text-light" role="button" aria-expanded="false">
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
