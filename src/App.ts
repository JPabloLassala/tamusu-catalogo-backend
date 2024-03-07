import { Express } from "express";
import cors from "cors";
import { createProductoRoutes } from "./Productos/ProductoRoutes";
import { createInstances } from "./Container";
import { createMarcaRoutes } from "./Marcas/MarcaRoutes";
import { createImageRoutes } from "./Images/ImageRoutes";
import morgan from "morgan";
import { globalExceptionLayer } from "./Error";

export function InitializeMiddlewares(app: Express): void {
  app.use(cors());
  app.use(morgan("combined"));

  const { marcaHandler, productoHandler, imageHandler } = createInstances();
  app.use("/", createProductoRoutes(productoHandler));
  app.use("/", createMarcaRoutes(marcaHandler));
  app.use("/", createImageRoutes(imageHandler));

  app.use(globalExceptionLayer);
}
