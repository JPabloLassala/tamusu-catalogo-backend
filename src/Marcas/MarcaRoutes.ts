import express from "express";
import { MarcaHandler } from "./MarcaHandler";

export function createMarcaRoutes(marcaHandler: MarcaHandler) {
  const router = express.Router();

  router.get("/marcas", (req, res) =>
    marcaHandler.getMarcas.bind(marcaHandler)(res),
  );

  return router;
}
