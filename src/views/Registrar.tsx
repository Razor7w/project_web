import { Form, Link, redirect, type ActionFunctionArgs } from "react-router-dom";
import { RegisterService } from "../services/UsuariosService";

export async function action({ request }: ActionFunctionArgs) {
  const RegistrarFormData = Object.fromEntries(await request.formData());

  const obj = {
    correo: RegistrarFormData.correo as string,
    contrasena: RegistrarFormData.contrasena as string,
    contrasena2: RegistrarFormData.contrasena2 as string,
  }

  if (!obj.correo || !obj.contrasena || !obj.contrasena2) {
    console.error("Todos los campos son obligatorios.");
    return 
  }

  if (obj.contrasena.length < 6) {
    console.error("La contraseña debe tener al menos 6 caracteres.");
    return 
  }

  if (obj.contrasena !== obj.contrasena2) {
    console.error("Las contraseñas no coinciden.");
    return 
  }
  const {mensaje} = await RegisterService(obj.correo, obj.contrasena);

  console.log(mensaje);

  if (mensaje === 'El usuario ya existe.') return
  return redirect("/");
}

export default function Registrar() {
  return (
    <>
      <h2 className="text-center">Registrar</h2>

      <div className="container-fluid col-3">
        <Form method="POST">
          <div className="mb-3">
            <label htmlFor="correo" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="correo" name="correo"/>
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena" className="form-label">
              Contraseña
            </label>
            <input type="password" className="form-control" id="contrasena" name="contrasena"/>
          </div>
          <div className="mb-3">
            <label htmlFor="contrasena2" className="form-label">
              Repetir contraseña
            </label>
            <input type="password" className="form-control" id="contrasena2" name="contrasena2"/>
          </div>
          <button type="submit" className="btn btn-success">
            Registrar
          </button>
          <br />
          <Link to="/" className="btn btn-primary mt-2">
            Volver
          </Link>
        </Form>
      </div>
    </>
  );
}
