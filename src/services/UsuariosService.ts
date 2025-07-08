import axios from "axios";

export async function LoginService(correo: string, contrasena: string) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/inicioSesion/`;
    const { data } = await axios.post(url, {correo, contrasena});
    return data
  } catch (error) {
    console.error("Error al obtener los arriendos:", error);
    throw error;
  }
}