import express from "express";
import { getProductos } from "./ProductoHandler";
import { Knex } from "knex";

export function createProductoRoutes(db: Knex) {
  const router = express.Router();

  router.get("/productos", (_, res) => getProductos(res, db));

  return router;
}
