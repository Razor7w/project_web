import axios from "axios";
import { safeParse } from "valibot";
import { CrearArriendoSchema } from "../types/crearArriendo";

type CrearArriendoFormData = {
  patenteVehiculo: string;
  tipoVehiculo: string;
  rutCliente: string;
  nombreCliente: string;
};

export async function CrearArriendos(formData: CrearArriendoFormData): Promise<{ mensaje: string }> {
  try {
    const resultado = safeParse(CrearArriendoSchema, formData);

    if (resultado.success) {
      const url = "http://localhost:3000/api/crearArriendo";
      const response = await axios.post(url, {
        patenteVehiculo: formData.patenteVehiculo,
        tipoVehiculo: formData.tipoVehiculo,
        rutCliente: formData.rutCliente,
        nombreCliente: formData.nombreCliente,
      });

      return response.data;
    } else {
      return { mensaje: "Datos del formulario no válidos." };
    }
  } catch (error) {
    console.error("Error no se pudo crear el arriendo:", error);
    return { mensaje: "Error al crear el arriendo." };
  }
}

