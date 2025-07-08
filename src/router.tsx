import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ArriendosActivos from "./views/ArriendosActivos";
import ArriendosTerminados from "./views/ArriendosTerminados";
import CrearArriendos, { action as actionArriendoCrear } from "./views/CrearArriendos";
import Loader from "./components/Loader";
import Login from "./views/Login";
import Registrar from "./views/Registrar";
import { ArriendosActivosLoader, ArriendosTerminadosLoader } from "./services/ArriendoService";
import TodosLosArriendos from "./views/TodosLosArriendos";
import Inicio from "./views/Home";

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
        path: "Inicio",
        element: <Inicio />
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
        path: "todosLosArriendos",
        element: <TodosLosArriendos />,
      },
      {
        path: "Registrar",
        element: <Registrar />,
      },
    ],
  },
]);
