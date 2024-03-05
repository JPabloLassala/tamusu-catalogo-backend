import express from "express";
import { getMarcas } from "./MarcaHandler";
import { Knex } from "knex";

export function createMarcaRoutes(db: Knex) {
  const router = express.Router();

  router.get("/marcas", (_, res) => getMarcas(res, db));

  return router;
}
