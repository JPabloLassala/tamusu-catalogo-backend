import express from "express";
import { ProductoController } from "./ProductoController";

export function createProductoRoutes(productoController: ProductoController) {
  const router = express.Router();

  router.get(
    "/productos",
    productoController.getProductos.bind(productoController),
  );

  return router;
}
