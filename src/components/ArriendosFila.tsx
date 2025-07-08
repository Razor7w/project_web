import type { MostrarTodosLosArriendos } from "../types/arriendo";

type ArriendosFilaProps = {
  index: number;
  categoría: MostrarTodosLosArriendos;
};

export default function ArriendosFila({ index, categoría }: ArriendosFilaProps) {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{categoría.rutUsuario}</td>
      <td>{categoría.nombreCliente}</td>
      <td>{categoría.patenteVehiculo}</td>
      <td>{categoría.tipoVehiculo}</td>
      <td>{categoría.fechaInicio}</td>
      <td>{categoría.fechaFin}</td>
    </tr>
  );
}
