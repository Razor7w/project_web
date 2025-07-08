import { Link } from "react-router-dom";

export default function Registrar() {
  return (
    <>
      <h2 className="text-center">Registrar</h2>

      <div className="container-fluid col-3">
        <form>
          <div className="mb-3">
            <label htmlFor="nombreusuario" className="form-label">
              Nombre de usuario
            </label>
            <input type="text" className="form-control" id="nombreusuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="emailusuario" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="emailusuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseñausuario" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="contraseñausuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseñausuario2" className="form-label">
              Repetir contraseña
            </label>
            <input type="password" className="form-control" id="contraseñausuario2" />
          </div>
          <button type="submit" className="btn btn-success">
            Registrar
          </button>
          <br />
          <Link to="/" className="btn btn-primary mt-2">
            Volver
          </Link>
        </form>
      </div>
    </>
  );
}
