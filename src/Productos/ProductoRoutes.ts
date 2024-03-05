import express from "express";
import { ProductoHandler } from "./ProductoHandler";

export function createProductoRoutes(productoHandler: ProductoHandler) {
  const router = express.Router();

  router.get("/productos", (_, res) => productoHandler.getProductos(res));

  return router;
}
