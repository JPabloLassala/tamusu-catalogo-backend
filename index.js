import express from "express";
import knex from "knex";
import cors from "cors";

const app = express();
const port = 3000;

const pg = knex({
  client: "sqlite3",
  connection: {
    filename: "./Articulos.db",
  },
});

app.use(cors());

app.get("/productos/", async (req, res) => {
  const test = await pg
    .select("*")
    .from("articulos_es")
    .innerJoin(
      "inventario",
      "inventario.codigo",
      "=",
      "articulos_es.codigo_capemi",
    )
    .whereIn("Pesada", [null, ""]);

  return res.json(test);
});

app.get("/marcas", async (req, res) => {
  const marcasResult = await pg
    .select("marca")
    .from("articulos_es")
    .innerJoin(
      "inventario",
      "inventario.codigo",
      "=",
      "articulos_es.codigo_capemi",
    )
    .groupBy("marca");
  const marcasSplit = marcasResult.map((marca) => {
    const asda = marca.marca.split(" / ").reduce((acc, curr) => curr.trim());
    if (asda === "VW") {
      return "VOLKSWAGEN";
    }
    return asda;
  });
  const marcasUnique = [...new Set(marcasSplit)];

  return res.json(marcasUnique);
});

app.get("/images/:id", async (req, res) => {
  const filePath = `./images/${req.params.id}.png`;
  return res.sendFile(filePath, { root: process.cwd() });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
