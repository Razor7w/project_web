import { Form, redirect, type ActionFunctionArgs } from "react-router-dom";
import Cookies from "js-cookie";
import { CambiarContrasenaService } from "../services/UsuariosService";

export async function action({ request }: ActionFunctionArgs) {
  const RegistrarFormData = Object.fromEntries(await request.formData());

  const obj = {
    contrasena: RegistrarFormData.contrasena as string,
    contrasena2: RegistrarFormData.contrasena2 as string,
    contrasena3: RegistrarFormData.contrasena3 as string,
  }

  if (!obj.contrasena || !obj.contrasena2 || !obj.contrasena3) {
    console.error("Todos los campos son obligatorios.");
    return 
  }

  if (obj.contrasena2.length < 6) {
    console.error("La contraseña debe tener al menos 6 caracteres.");
    return 
  }

  if (obj.contrasena2 !== obj.contrasena3) {
    console.error("Las contraseñas no coinciden.");
    return 
  }
  const email = Cookies.get('email')
  const {mensaje} = await CambiarContrasenaService(email ?? '', obj.contrasena, obj.contrasena2);

  if (mensaje === 'Contraseña anterior incorrecta.') {
    console.error("Contraseña anterior incorrecta.");
    return 
  }
  Cookies.remove('email')
  return redirect("/");
}

export default function CambiarContrasena() {

  return (
    <>
        <h2 className="text-center">Cambiar Contraseña</h2>
        <br />
        <div className="container-fluid col-3">
          <Form method="POST">
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label">
                Contraseña actual
              </label>
              <input type="password" className="form-control" id="contrasena" name="contrasena" />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena2" className="form-label">
                Nueva contraseña
              </label>
              <input type="password" className="form-control" id="contrasena2" name="contrasena2" />
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena3" className="form-label">
                Repetir contraseña
              </label>
              <input type="password" className="form-control" id="contrasena3" name="contrasena3" />
            </div>
            <button type="submit" className="btn btn-primary">
              Cambiar
            </button>
          </Form>
        </div>
    </>
  );
}
