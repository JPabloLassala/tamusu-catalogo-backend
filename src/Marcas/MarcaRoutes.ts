import express from "express";
import { MarcaHandler } from "./MarcaHandler";

export function createMarcaRoutes(marcaHandler: MarcaHandler) {
  const router = express.Router();

  router.get("/marcas", (_, res) => marcaHandler.getMarcas(res));

  return router;
}
