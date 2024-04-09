import { Knex } from "knex";
import { MarcaDTO, MarcaRepositoryInterface } from "./MarcaSchema";

export class MarcaRepository implements MarcaRepositoryInterface {
  constructor(private readonly db: Knex) {}

  getMarcas = async (): Promise<string[]> => {
    const result = await this.db
      .select<MarcaDTO[]>("marca")
      .from("articulos_es")
      .innerJoin(
        "inventario",
        "inventario.codigo",
        "=",
        "articulos_es.codigo_capemi",
      )
      .groupBy("marca");

    return result.map((marca): string => marca.marca);
  };
}
