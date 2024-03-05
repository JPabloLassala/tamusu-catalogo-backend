import express from "express";
import { getImage } from "./ImageHandler";

export function createImageRoutes() {
  const router = express.Router();

  router.get("/productos", (req, res) => getImage(req, res));

  return router;
}
