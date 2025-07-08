import { getArriendos } from "../services/ArriendoService";
import { useLoaderData } from "react-router-dom";
import type { MostrarTodosLosArriendos } from "../types/arriendo";

export async function loader() {
  const arriendos = await getArriendos();
  return arriendos;
}

export default function Arriendos() {
  const arriendos = useLoaderData() as MostrarTodosLosArriendos[];

  return (
    <>
      <h2 className="text-center">Todos Los Arriendos</h2>
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
            {arriendos.map((arriendo, index) => (
              <tr key={arriendo.id}>
                <td>{index + 1}</td>
                <td>{arriendo.rutUsuario}</td>
                <td>{arriendo.nombreCliente}</td>
                <td>{arriendo.patenteVehiculo}</td>
                <td>{arriendo.tipoVehiculo}</td>
                <td>{arriendo.fechaInicio}</td>
                <td>{arriendo.fechaFin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
