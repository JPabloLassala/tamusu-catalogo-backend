import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { MarcaDTO } from "./data/Marca";
import { KnexConfig } from "./config/knex";

const app: Express = express();
const port = 3000;
const sqlite = knex(KnexConfig);

app.use(cors());

app.get("/productos/", (_, res) => {
  const test = sqlite
    .select("*")
    .from("articulos_es")
    .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
    .whereIn("Pesada", [null, ""]);

  return res.json(test);
});

app.get("/marcas", async (req, res) => {
  const marcas = await sqlite
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
});

app.get("/images/:id", (req, res) => {
  const filePath = `./images/${req.params.id}.png`;
  return res.sendFile(filePath, { root: process.cwd() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
