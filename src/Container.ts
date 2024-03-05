import knex from "knex";
import { KnexConfig } from "./config/knex";
import { MarcaHandler } from "./Marcas/MarcaHandler";
import { ProductoHandler } from "./Productos/ProductoHandler";
import { ImageHandler } from "./Images/ImageHandler";
import { ProductoAdapter } from "./Productos/ProductoAdapter";
import { MarcaAdapter } from "./Marcas/MarcaAdapter";

export function createInstances() {
  const sqlite = knex(KnexConfig);

  const productoAdapter = new ProductoAdapter(sqlite);
  const marcaAdapter = new MarcaAdapter(sqlite);

  const marcaHandler = new MarcaHandler(marcaAdapter);
  const productoHandler = new ProductoHandler(productoAdapter);
  const imageHandler = new ImageHandler();

  return { marcaHandler, productoHandler, imageHandler };
}
