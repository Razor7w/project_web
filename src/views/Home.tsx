import { NavLink } from "react-router-dom";

export default function Inicio() {
  return (
    <>
      <h2 className="text-center">Gestión</h2>
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
                    <br />
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
                    <br />
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
                    <NavLink to="/todosLosArriendos" className="btn btn-primary mt-auto">
                      Visitar
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
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
        </div>
      </div>
    </>
  );
}
