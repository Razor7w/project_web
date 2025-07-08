import { useLoaderData } from "react-router-dom";
import type { VehiculosTipos } from "../types/arriendo";
export default function TodosLosArriendos() {
  const vehiculos = useLoaderData() as VehiculosTipos[];

  const numeroDeArriendosPorTipo = (tipo: string) =>{
    const vehiculo = vehiculos.find(v => v.tipoVehiculo === tipo);
    return vehiculo ? vehiculo.cantidad : 0;
  }
  return (
    <>
        <h2 className="text-center">Todos los Arriendos</h2>
        <div className="container-fluid">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Tipo de Vehiculo</th>
                        <th scope="col">Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Camioneta</td>
                        <td>{numeroDeArriendosPorTipo('Camioneta')}</td>
                    </tr>
                    <tr>
                        <td>SUV</td>
                        <td>{numeroDeArriendosPorTipo('SUV')}</td>
                    </tr>
                    <tr>
                        <td>Sedán</td>
                        <td>{numeroDeArriendosPorTipo('Sedán')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  );
}