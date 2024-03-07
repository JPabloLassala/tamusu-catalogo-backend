import express from "express";
import { ProductoHandler } from "./ProductoHandler";

export function createProductoRoutes(productoHandler: ProductoHandler) {
  const router = express.Router();

  router.get("/productos/:page", (req, res) =>
    productoHandler.getProductos(req, res),
  );

  return router;
}
