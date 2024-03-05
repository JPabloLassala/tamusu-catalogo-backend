import { Response } from "express";
import knex from "knex";

export async function getProductos(res: Response, db: knex.Knex) {
  const test = await db
    .select("*")
    .from("articulos_es")
    .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
    .whereIn("Pesada", [null, ""]);

  return res.json(test);
}
