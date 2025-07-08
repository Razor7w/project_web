import { Form, Link, redirect, type ActionFunctionArgs } from "react-router-dom";
import { LoginService } from "../services/UsuariosService";
import Cookies from "js-cookie";

  export async function action({ request }: ActionFunctionArgs) {
    const LoginFormData = Object.fromEntries(await request.formData());

    const obj = {
      correo: LoginFormData.correo as string,
      contrasena: LoginFormData.contrasena as string,
    }

    const {mensaje} = await LoginService(obj.correo, obj.contrasena);

    if (mensaje === 'Contraseña incorrecta.' || mensaje === 'Email y password son obligatorios.' || mensaje === 'Usuario no encontrado.') return
    else {
      Cookies.set('email', obj.correo)
      return redirect("/Inicio");
    }
  }

export default function Login() {

  return (
    <>
      <h2 className="text-center">Inicio Sesion</h2>
      <br />
      <div className="container-fluid col-3">
        <Form method="POST">
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Correo
            </label>
            <input type="text" className="form-control" id="correo" name="correo" />
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="contrasena" name="contrasena" />
          </div>

          <button className="btn btn-success mt-2" type="submit">
            Ingresar
          </button>
          <br />
          <Link to="/Registrar" className="btn btn-primary mt-2">
            Registrate aquí
          </Link>
        </Form>
      </div>
    </>
  );
}
