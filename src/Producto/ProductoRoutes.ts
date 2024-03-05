import express from "express";
import { GetProductos } from "./ProductoHandler";
import { Knex } from "knex";

export function createProductoRoutes(db: Knex) {
  const router = express.Router();

  router.get("/productos/", (req, res) => GetProductos(res, db));

  return router;
}
