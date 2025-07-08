import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2 className="text-center">Inicio Sesion</h2>
      <br />
      <div className="container-fluid col-3">
        <Form>
          <div className="mb-3">
            <label htmlFor="nombreusuario" className="form-label">
              Nombre de usuario
            </label>
            <input type="text" className="form-control" id="nombreusuario" />
          </div>
          <div className="mb-3">
            <label htmlFor="contraseñausuario" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="contraseñausuario" />
          </div>

          <Link to="/Inicio" className="btn btn-success mt-2">
            Ingresar
          </Link>
          <br />
          <Link to="/Registrar" className="btn btn-primary mt-2">
            Registrate aquí
          </Link>
        </Form>
      </div>
    </>
  );
}
