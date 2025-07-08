import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h2 className="text-center">Revisión</h2>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-4">
                  <img
                    src="../img/img2.jpg"
                    className="img-fluid mx-auto img-fluid rounded-start h-100 object-fit-cover"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">Arriendos Activos</h5>
                      <p className="card-text">Revisa todos los arriendos activos.</p>
                    </div>
                    <NavLink to="/arriendosActivos" className="btn btn-primary mt-auto">
                      Visitar
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-4">
                  <img
                    src="../img/img3.jpg"
                    className="img-fluid mx-auto img-fluid rounded-start h-100 object-fit-cover"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">Arriendos Terminados</h5>
                      <p className="card-text">Revisa los arriendos pasados aquí.</p>
                    </div>
                    <NavLink to="/arriendosTerminados" className="btn btn-primary mt-auto">
                      Visitar
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <div className="card h-100">
              <div className="row g-0 h-100">
                <div className="col-4">
                  <img
                    src="../img/img1.avif"
                    className="img-fluid mx-auto img-fluid rounded-start h-100 object-fit-cover"
                    alt="..."
                  />
                </div>
                <div className="col-8">
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">Todos los Arriendos</h5>
                      <p className="card-text">Todo el registro de arriendos pasados aquí.</p>
                    </div>
                    <NavLink to="/arriendos" className="btn btn-primary mt-auto">
                      Visitar
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-center">Gestión</h2>
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card mb-6" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Agregar</h5>
                    <p className="card-text">Agrega un nuevo arriendo.</p>
                    <NavLink to="/crearArriendo" className="btn btn-success">
                      <i className="bi bi-file-earmark-plus"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card mb-6" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Eliminar Arriendo</h5>
                    <p className="card-text">Finaliza o elimina arriendos activos.</p>
                    <NavLink to="/eliminarArriendo" className="btn btn-danger">
                      <i className="bi bi-trash3"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card mb-6" style={{ maxWidth: "600px" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Editar Arriendo</h5>
                    <p className="card-text">Edita los datos de arriendos activos.</p>
                    <NavLink to="/editarArriendo" className="btn btn-warning">
                      <i className="bi bi-pencil"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
