import { Express } from "express";
import cors from "cors";
import { createProductoRoutes } from "./Productos/ProductoRoutes";
import { createInstances } from "./Container";
import { createMarcaRoutes } from "./Marcas/MarcaRoutes";
import { createImageRoutes } from "./Images/ImageRoutes";
import { globalExceptionLayer } from "./Error";
import { morganMiddleware } from "./config/morgan";

export function InitializeMiddlewares(app: Express): void {
  app.use(cors());
  app.use(morganMiddleware);

  const { marcaController, productoController, imageController } =
    createInstances();
  app.use("/", createProductoRoutes(productoController));
  app.use("/", createMarcaRoutes(marcaController));
  app.use("/", createImageRoutes(imageController));

  app.use(globalExceptionLayer);
}
