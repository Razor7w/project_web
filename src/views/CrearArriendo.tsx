export default function Home() {
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="rutcliente" className="form-label">
            Ingresa el RUT del cliente.
          </label>
          <input type="number" className="form-control" id="rutcliente" aria-describedby="ruthelp" />
          <div id="ruthelp" className="form-text">
            Si su digito termina en K, reemplacelo por un 0
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="nombrecliente" className="form-label">
            Ingresa el nombre del cliente.
          </label>
          <input type="text" className="form-control" id="patenteVehiculo" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombrecliente" className="form-label">
            Ingrese la pantente del vehículo.
          </label>
          <input type="text" className="form-control" id="patenteVehiculo" />
        </div>
        <div className="mb-3">
          <label htmlFor="nombrecliente" className="form-label">
            Ingrese el tipo de vehículo.
          </label>
          <select className="form-select" aria-label="Default select example">
            <option selected>Selecciona el tipo de vehiculo</option>
            <option value="1">Sedán</option>
            <option value="2">SUV</option>
            <option value="3">Camioneta</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
      </form>
    </>
  );
}
