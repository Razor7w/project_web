import { Form, redirect, type ActionFunctionArgs } from "react-router-dom";
import { CrearArriendos } from "../services/CrearArriendosService";
import { format, validate } from "rut.js";

export function validarLetrasYNumeros(input: string): boolean {
  const letras = input.match(/[a-zA-Z]/g) || [];
  const numeros = input.match(/[0-9]/g) || [];

  return letras.length >= 4 && numeros.length >= 2;
}

export async function action({ request }: ActionFunctionArgs) {
  const CrearArriendoFormData = Object.fromEntries(await request.formData());

  const obj = {
    patenteVehiculo: CrearArriendoFormData.patenteVehiculo as string,
    tipoVehiculo: CrearArriendoFormData.tipoVehiculo as string,
    rutCliente: format(CrearArriendoFormData.rutCliente as string, { dots: false }),
    nombreCliente: CrearArriendoFormData.nombreCliente as string,
  }
  if (!validate(obj.rutCliente)) {
    console.error("El rut ingresado es inválido.");
    return;
  }
  if (!validarLetrasYNumeros(obj.patenteVehiculo)) {
    console.error("La patente debe contener al menos 4 letras y 2 números.");
    return;
  }
  const {mensaje} = await CrearArriendos(obj);

  if (mensaje === 'Los campos son obligatorios.') return
  return redirect("/Inicio");
}

export default function crearArriendosForm() {
  return (
    <>
      <Form method="POST">
        <h1 className="mb-4">Crear Arriendo</h1>
        <div className="mb-3">
          <label htmlFor="rutCliente" className="form-label">
            Ingresa el RUT del Usuario.
          </label>
          <input type="text" className="form-control" id="rutCliente" name="rutCliente" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombreCliente" className="form-label">
            Ingresa el nombre del Usuario.
          </label>
          <input type="text" className="form-control" id="nombreCliente" name="nombreCliente" />
        </div>
        <div className="mb-3">
          <label htmlFor="patenteVehiculo" className="form-label">
            Ingrese la pantente del vehículo.
          </label>
          <input type="text" className="form-control" id="patenteVehiculo" name="patenteVehiculo" />
        </div>
        <div className="mb-3">
          <label htmlFor="tipoVehiculo" className="form-label">
            Ingrese el tipo de vehículo.
          </label>
          <select
            className="form-select"
            id="tipoVehiculo"
            name="tipoVehiculo"
            aria-label="Default select example"
            defaultValue="0"
          >
            <option value="">Selecciona el tipo de vehiculo</option>
            <option value="Sedán">Sedán</option>
            <option value="SUV">SUV</option>
            <option value="Camioneta">Camioneta</option>
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
