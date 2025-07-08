import { useLoaderData } from "react-router-dom";
import type { Vehiculo } from "../types/arriendo";

export default function ArriendosTerminados() {
  const vehiculos = useLoaderData() as Vehiculo[];
  return (
    <>
      <h2 className="text-center">Arriendos Terminados</h2>
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
                <td>{arriendo.fechaInicio instanceof Date ? arriendo.fechaInicio.toLocaleDateString() : arriendo.fechaInicio}</td>
                <td>
                  {arriendo.fechaFin
                    ? arriendo.fechaFin instanceof Date
                      ? arriendo.fechaFin.toLocaleDateString()
                      : arriendo.fechaFin
                    : '----------'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
