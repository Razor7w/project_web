import { array, object, string, type InferInput, type InferOutput } from "valibot";

export const CrearArriendoSchema = object({
  patenteVehiculo: string(),
  tipoVehiculo: string(),
  rutCliente: string(),
  nombreCliente: string(),
});

export const CrearArriendosSchema = array(CrearArriendoSchema);

export type Arriendo = InferOutput<typeof CrearArriendoSchema>;

//Tipos(Types)

export type CrearArriendos = InferInput<typeof CrearArriendoSchema>;
