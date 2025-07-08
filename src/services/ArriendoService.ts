import axios from "axios";
import { safeParse } from "valibot";
import { MostrarTodosLosArriendosSchema } from "../types/arriendo";

export async function getArriendos() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/arriendos`;
    const response = await axios.get(url);
    const arriendosData = response.data.data;
    const resultado = safeParse(MostrarTodosLosArriendosSchema, arriendosData);
    if (resultado.success) {
      return resultado.output;
    } else {
      throw new Error("Hubo un error al pedir datos");
    }
  } catch (error) {
    console.error("Error al obtener los arriendos:", error);
    throw error;
  }
}
