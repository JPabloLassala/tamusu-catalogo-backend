import express from "express";
import { ImageController } from "./ImageController";

export function createImageRoutes(imageController: ImageController) {
  const router = express.Router();

  router.get("/images/:id", imageController.getImage.bind(imageController));

  return router;
}
