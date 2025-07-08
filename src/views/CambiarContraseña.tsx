export default function CambiarContraseña() {
  return (
    <>
      <body>
        <h2 className="text-center">Cambiar Contraseña</h2>
        <br />
        <div className="container-fluid col-3">
          <form>
            <div className="mb-3">
              <label htmlFor="contraseñausuario" className="form-label">
                Contraseña actual
              </label>
              <input type="password" className="form-control" id="contraseñausuario" />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseñausuario2" className="form-label">
                Nueva contraseña
              </label>
              <input type="password" className="form-control" id="contraseñausuario2" />
            </div>
            <div className="mb-3">
              <label htmlFor="contraseñausuario3" className="form-label">
                Repetir contraseña
              </label>
              <input type="password" className="form-control" id="contraseñausuario3" />
            </div>
            <button type="submit" className="btn btn-primary">
              Cambiar
            </button>
          </form>
        </div>
      </body>
    </>
  );
}
