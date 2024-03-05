import { Response } from "express";
import { Producto, ProductoAdapterInterface } from "./ProductSchema";

export class ProductoHandler {
  constructor(private readonly productoAdapter: ProductoAdapterInterface) {}

  getProductos = async (res: Response) => {
    const productos: Producto[] = await this.productoAdapter.getProductos();

    return res.json(productos);
  };
}
