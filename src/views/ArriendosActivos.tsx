export default function arriendosActivos() {
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>12.345.678-9</td>
              <td>Pablito Alcachofa</td>
              <td>ABC123</td>
              <td>Auto</td>
              <td>01/01/2025</td>
              <td>----------</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
