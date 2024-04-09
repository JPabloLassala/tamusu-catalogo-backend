import express from "express";
import { MarcaController } from "./MarcaController";

export function createMarcaRoutes(marcaController: MarcaController) {
  const router = express.Router();

  router.get("/marcas", (req, res) =>
    marcaController.getMarcas.bind(marcaController)(res),
  );

  return router;
}
