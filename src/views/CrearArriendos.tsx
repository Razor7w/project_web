import { Form, redirect, type ActionFunctionArgs } from "react-router-dom";
import { CrearArriendos } from "../services/CrearArriendosServices";

export async function action({ request }: ActionFunctionArgs) {
  const CrearArriendoFormData = Object.fromEntries(await request.formData());
  const resultado = await CrearArriendos(CrearArriendoFormData);
  if (!resultado?.success) {
    return resultado;
  }
  return redirect("/");
}

export default function crearArriendosForm() {
  return (
    <>
      <Form method="POST">
        <h1 className="mb-4">Crear Arriendo</h1>
        <div className="mb-3">
          <label htmlFor="rutUsuario" className="form-label">
            Ingresa el RUT del Usuario.
          </label>
          <input type="text" className="form-control" id="rutUsuario" name="rutUsuario" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">
            Ingresa el nombre del Usuario.
          </label>
          <input type="text" className="form-control" id="nombreUsuario" name="nombreUsuario" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">
            Ingrese la pantente del vehículo.
          </label>
          <input type="text" className="form-control" id="patenteVehiculo" name="patenteVehiculo" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreUsuario" className="form-label">
            Ingrese el tipo de vehículo.
          </label>
          <select
            className="form-select"
            id="tipoVehiculo"
            name="tipoVehiculo"
            aria-label="Default select example"
            defaultValue="0"
          >
            <option value="0">Selecciona el tipo de vehiculo</option>
            <option value="1">Sedán</option>
            <option value="2">SUV</option>
            <option value="3">Camioneta</option>
          </select>
        </div>
        <button type="reset" className="btn btn-warning me-2">
          Restablecer
        </button>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </Form>
    </>
  );
}
