import { Knex } from "knex";
import { Clasificacion, Liviana, Pesada, ProductDTO, Producto } from "./ProductSchema";
import { Marcas } from "../Marcas/MarcaSchema";

export class ProductoAdapter {
  constructor(private readonly db: Knex) {}

  getProductos = async (): Promise<Producto[]> => {
    const dbResult: ProductDTO[] = await this.db
      .select("*")
      .from("articulos_es")
      .innerJoin("inventario", "inventario.codigo", "=", "articulos_es.codigo_capemi")
      .whereIn("Pesada", [null, ""]);

    return dbResult.map((producto) => ({
      id: producto.codigo_capemi,
      descripcion: producto.descripcion,
      clasificacion: producto.clasificacion as unknown as Clasificacion,
      OEM: producto.OEM,
      codigo_completo: producto.codigo_completo,
      otros_mercados: producto.otros_mercados,
      Pesada: producto.Pesada as Pesada,
      Liviana: producto.Liviana as Liviana,
      marca: producto.marca as unknown as Marcas,
      modelo: producto.modelo,
      lanzamiento: producto.lanzamiento,
    }));
  };
}
