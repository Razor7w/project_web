export default function TodosLosArriendos() {
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
                    <td>Auto</td>
                    <td>32</td>
                </tr>
                <tr>
                    <td>SUV</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>Camioneta</td>
                    <td>8</td>
                </tr>
            </tbody>
        </table>
    </div>

</>
  );
}