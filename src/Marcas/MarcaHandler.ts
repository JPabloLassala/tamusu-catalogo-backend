import { Response } from "express";
import { Knex } from "knex";
import { MarcaDTO } from "./MarcaSchema";

export async function getMarcas(res: Response, db: Knex) {
  const marcas = await db
    .select<MarcaDTO[]>("marca")
    .from("articulos_es")
    .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
    .groupBy("marca");

  const marcasSplit: string[] = marcas.map((marca): string => {
    const trimmedMarca: string = marca.marca.split(" / ").reduce((_: string, curr: string) => curr.trim());
    if (trimmedMarca === "VW") {
      return "VOLKSWAGEN";
    }
    return trimmedMarca;
  });
  const marcasUnique = [...new Set(marcasSplit)];

  return res.json(marcasUnique);
}
