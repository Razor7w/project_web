import { useLoaderData, useRevalidator } from "react-router-dom";
import type { Vehiculo } from "../types/arriendo";
import { devolucionArriendos, eliminarArriendos } from "../services/ArriendoService";

export const limpiarFecha = (fecha: string): string => {

  const fechaLimpia = new Date(fecha);

  const opciones: Intl.DateTimeFormatOptions = {
    timeZone: "America/Santiago",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return fechaLimpia.toLocaleString("es-CL", opciones);
}

export default function ArriendosActivos() {
  const vehiculos = useLoaderData() as Vehiculo[];
  const { revalidate } = useRevalidator();

  const borrar = async (id: string) => {
    const resp = await eliminarArriendos(id);
    if (resp === 'Arriendo borrado') revalidate()
    
  }

  const devolucion = async (id: string) => {
    const resp = await devolucionArriendos(id)
    if (resp === 'Devolucion exitosa') revalidate()
  }

  return (
    <>
      <h2 className="text-center">Arriendos Activos</h2>
      <div className="container-fluid">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">N°</th>
              <th scope="col">Rut Cliente</th>
              <th scope="col">Nombre Cliente</th>
              <th scope="col">Patente Vehículo</th>
              <th scope="col">Tipo Vehículo</th>
              <th scope="col">Fecha Inicio</th>
              <th scope="col">Fecha Fin</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {vehiculos.map((arriendo, index) => (
              <tr key={arriendo.id}>
                <td>{index + 1}</td>
                <td>{arriendo.rutCliente}</td>
                <td>{arriendo.nombreCliente}</td>
                <td>{arriendo.patenteVehiculo}</td>
                <td>{arriendo.tipoVehiculo}</td>
                <td>{arriendo.fechaInicio instanceof Date ? limpiarFecha(arriendo.fechaInicio.toLocaleDateString()) : limpiarFecha(arriendo.fechaInicio)}</td>
                <td>
                  {arriendo.fechaFin
                    ? arriendo.fechaFin instanceof Date
                      ? arriendo.fechaFin.toLocaleDateString()
                      : arriendo.fechaFin
                    : '----------'}
                </td>
                <td>
                  <button className="btn btn-danger me-1" role="button" onClick={() => borrar(arriendo.id)} >
                   <i className="bi bi-trash3"></i>
                  </button>
                  <button className="btn btn-warning" role="button" onClick={() => devolucion(arriendo.id)}>
                   <i className="bi bi-pencil"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
