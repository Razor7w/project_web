import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import ArriendosActivos from "./views/ArriendosActivos";
import ArriendosTerminados from "./views/ArriendosTerminados";
import CrearArriendos, { action as actionArriendoCrear } from "./views/CrearArriendos";
import Loader from "./components/Loader";
import Login, { action as actionLogin } from "./views/Login";
import Registrar from "./views/Registrar";
import { ArriendosActivosLoader, ArriendosTerminadosLoader, TodosLosArriendosLoader } from "./services/ArriendoService";
import TodosLosArriendos from "./views/TodosLosArriendos";
import Inicio from "./views/Home";
import CambiarContraseña from "./views/CambiarContraseña";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    HydrateFallback: Loader,
    children: [
      {
        index: true,
        element: <Login />,
        action: actionLogin
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
        loader: TodosLosArriendosLoader
      },
      {
        path: "registrar",
        element: <Registrar />,
      },
      {
        path: "cambiarContrasena",
        element: <CambiarContraseña />,
      },
    ],
  },
]);
