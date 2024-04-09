import knex from "knex";
import { KnexConfig } from "./config/knex";
import { MarcaController } from "./Marcas/MarcaController";
import { ProductoController } from "./Productos/ProductoController";
import { ImageController } from "./Images/ImageController";
import { ProductoRepository } from "./Productos/ProductoRepository";
import { MarcaRepository } from "./Marcas/MarcaRepository";

export function createInstances() {
  const sqlite = knex(KnexConfig);

  const productoRepository = new ProductoRepository(sqlite);
  const marcaRepository = new MarcaRepository(sqlite);

  const marcaController = new MarcaController(marcaRepository);
  const productoController = new ProductoController(productoRepository);
  const imageController = new ImageController();

  return { marcaController, productoController, imageController };
}
