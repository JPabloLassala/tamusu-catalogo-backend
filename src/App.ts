import { Express } from "express";
import cors from "cors";
import { createProductoRoutes } from "./Producto/ProductoRoutes";
import { Knex } from "knex";

export function InitializeServer(app: Express, db: Knex) {
  app.use(cors);

  app.use("/", createProductoRoutes(db));
}
