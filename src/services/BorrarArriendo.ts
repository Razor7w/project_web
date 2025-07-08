
export async function borrarArriendo(id: number) {
    try {
      const url = http://localhost:3000/api/arriendos/${id};
      await axios.delete(url);
    } catch (error) {
      console.error("Error al borrar el arriendo:", error);
      throw error;
    }
  }
  