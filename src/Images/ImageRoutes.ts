import express from "express";
import { ImageHandler } from "./ImageHandler";

export function createImageRoutes(imageHandler: ImageHandler) {
  const router = express.Router();

  router.get("/images/:id", imageHandler.getImage.bind(imageHandler));

  return router;
}
