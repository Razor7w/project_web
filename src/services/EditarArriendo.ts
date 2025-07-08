export async function finalizarArriendo(id: number, fechaFin: string) {
    try {
      const url = http://localhost:3000/api/arriendos/${id};
      await axios.patch(url, {
        fechaFin: fechaFin,
      });
    } catch (error) {
      console.error("Error al finalizar el arriendo:", error);
      throw error;
    }
  }