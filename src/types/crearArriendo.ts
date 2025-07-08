import { array, object, string, optional, type InferInput, type InferOutput } from "valibot";

export const CrearArriendoSchema = object({
  fechaInicio: string(),
  fechaFin: optional(string()),
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutUsuario: string(),
  nombreUsuario: string(),
});

export const CrearArriendosSchema = array(CrearArriendoSchema);

export type Arriendo = InferOutput<typeof CrearArriendoSchema>;

//Tipos(Types)

export type CrearArriendos = InferInput<typeof CrearArriendoSchema>;
