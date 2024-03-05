import { Knex } from "knex";
import { MarcaDTO } from "./MarcaSchema";

export class MarcaAdapter {
  constructor(private readonly db: Knex) {}

  getMarcas = async (): Promise<string[]> => {
    const result = await this.db
      .select<MarcaDTO[]>("marca")
      .from("articulos_es")
      .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
      .groupBy("marca");

    return result.map((marca): string => marca.marca);
  };
}
