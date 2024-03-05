import express from "express";
import { ImageHandler } from "./ImageHandler";

export function createImageRoutes(imageHandler: ImageHandler) {
  const router = express.Router();

  router.get("/productos", (req, res) => imageHandler.getImage(req, res));

  return router;
}
