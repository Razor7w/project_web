import axios from "axios";
import { safeParse } from "valibot";
import { CrearArriendoSchema } from "../types/CrearArriendo";

type CrearArriendoFormData = {
  fechaInicio: string;
  fechaFin: string;
  patenteVehiculo: string;
  tipoVehiculo: string;
  rutUsuario: string;
  nombreUsuario: string;
};

export async function CrearArriendos(formData: CrearArriendoFormData) {
  try {
    const resultado = safeParse(CrearArriendoSchema, formData);
    if (!resultado.success) {
      const url = "http://localhost:3000/api/crearArriendos";
      await axios.post(url, {
        fechaInicio: formData.fechaInicio,
        fechaFin: formData.fechaFin,
        patenteVehiculo: formData.patenteVehiculo,
        tipoVehiculo: formData.tipoVehiculo,
        rutUsuario: formData.rutUsuario,
        nombreUsuario: formData.nombreUsuario,
      });
      return { success: true };
    }
  } catch (error) {
    console.error("Error no se pudo crear el arriendo:");
    throw error;
  }
}
