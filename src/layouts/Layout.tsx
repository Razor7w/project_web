import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Layout() {
  const navigate = useNavigate();
  useEffect(() => {
    const email = Cookies.get('email')
    if (!email) navigate("/");
  }, []);
  return (
    <>
      {/* {Navbar} */}
      <Navbar />
      {/* {Contenido  Principal} */}
      <main className="container-fluid">
        <Outlet />
      </main>
    </>
  );
}
