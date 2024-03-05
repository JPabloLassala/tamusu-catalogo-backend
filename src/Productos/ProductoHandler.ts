import { Response } from "express";
import knex from "knex";

export class ProductoHandler {
  constructor(private readonly db: knex.Knex) {}

  getProductos = async (res: Response) => {
    const test = await this.db
      .select("*")
      .from("articulos_es")
      .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
      .whereIn("Pesada", [null, ""]);

    return res.json(test);
  };
}
