import axios from "axios";


export async function ArriendosActivosLoader() {
  try {
    // TODO: Cambiar la URL
    const response = await axios.get("http://localhost:3000/api/arriendosActivos");
    return response.data.data;
  } catch (error) {
    console.error("Error al cargar arriendos activos:", error);
    throw new Error("Error al cargar arriendos activos");
  }
}

export async function ArriendosTerminadosLoader() {
  try {
    const response = await axios.get("http://localhost:3000/api/arriendosTerminados");
    return response.data.data;
  } catch (error) {
    console.error("Error al cargar arriendos arriendos Terminados:", error);
    throw new Error("Error al cargar arriendos arriendos Terminados");
  }
}

export async function TodosLosArriendosLoader() {
  try {
    const response = await axios.get("http://localhost:3000/api/arriendos/totalesPorTipo");
    return response.data;
  } catch (error) {
    console.error("Error al cargar arriendos arriendos Terminados:", error);
    throw new Error("Error al cargar arriendos arriendos Terminados");
  }
}


export async function eliminarArriendos(id: string) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/borrarArriendo/${id}`;
    const { data } = await axios.delete(url);
    return data.data
  } catch (error) {
    console.error("Error al obtener los arriendos:", error);
    throw error;
  }
}

export async function devolucionArriendos(id: string) {
  try {
    const url = `${import.meta.env.VITE_API_URL}/editarArriendo/${id}`;
    const { data } = await axios.post(url);
    return data.data
  } catch (error) {
    console.error("Error al obtener los arriendos:", error);
    throw error;
  }
}