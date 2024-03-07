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

  const { marcaHandler, productoHandler, imageHandler } = createInstances();
  app.use("/", createProductoRoutes(productoHandler));
  app.use("/", createMarcaRoutes(marcaHandler));
  app.use("/", createImageRoutes(imageHandler));

  app.use(globalExceptionLayer);
}
