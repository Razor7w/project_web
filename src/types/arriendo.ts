import { array, number, object, string, type InferOutput } from "valibot";

export const MostrarElArriendoSchema = object({
  id: number(),
  fechaInicio: string(),
  fechaFin: string(),
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutUsuario: string(),
  nombreCliente: string(),
});

export const MostrarTodosLosArriendosSchema = array(MostrarElArriendoSchema);

//Tipos(Types)
export type MostrarTodosLosArriendos = InferOutput<typeof MostrarElArriendoSchema>;
