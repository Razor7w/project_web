import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import ArriendosActivos from "./views/ArriendosActivos";
import ArriendosTerminados from "./views/ArriendosTerminados";
import CrearArriendos, { action as actionArriendoCrear } from "./views/CrearArriendos";
import EliminarArriendo from "./views/EliminarArriendo";
import EditarArriendo from "./views/EditarArriendo";
import Loader from "./components/Loader";
import Login from "./views/Login";
import Registrar from "./views/Registrar";
import { ArriendosActivosLoader, ArriendosTerminadosLoader } from "./services/ArriendoService";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: Loader,
    children: [
      {
        index: true,
        element: <Login />,
      },
       {
        path: "Home",
        element: <Home />
      },
      {
        path: "arriendosActivos",
        element: <ArriendosActivos />,
        loader: ArriendosActivosLoader
      },
      {
        path: "arriendosTerminados",
        element: <ArriendosTerminados />,
        loader: ArriendosTerminadosLoader
      },
      {
        path: "crearArriendo",
        element: <CrearArriendos />,
        action: actionArriendoCrear,
      },
      {
        path: "editarArriendo/:id",
        element: <EditarArriendo />,
      },
      {
        path: "eliminarArriendo/:id",
        element: <EliminarArriendo />,
      },
      {
        path: "Registrar",
        element: <Registrar />,
      },
    ],
  },
]);
