import { Express } from "express";
import cors from "cors";
import { createProductoRoutes } from "./Productos/ProductoRoutes";
import { createInstances } from "./Container";
import { createMarcaRoutes } from "./Marcas/MarcaRoutes";
import { createImageRoutes } from "./Images/ImageRoutes";
import { globalExceptionLayer } from "./Error";
import { morganMiddleware } from "./config/morgan";
import { JsonObject, serve, setup } from "swagger-ui-express";
import swaggerDocument from "./swagger.json";

export function InitializeMiddlewares(app: Express): void {
  app.use(cors());
  app.use(morganMiddleware);
  app.use("/api-docs", serve, setup(swaggerDocument as JsonObject));

  const { marcaHandler, productoHandler, imageHandler } = createInstances();
  app.use("/", createProductoRoutes(productoHandler));
  app.use("/", createMarcaRoutes(marcaHandler));
  app.use("/", createImageRoutes(imageHandler));

  app.use(globalExceptionLayer);
}
