import { Response } from "express";
import { Producto } from "./ProductSchema";

interface ProductoAdapterInterface {
  getProductos: () => Promise<Producto[]>;
}

export class ProductoHandler {
  constructor(private readonly productoAdapter: ProductoAdapterInterface) {}

  getProductos = async (res: Response) => {
    const productos: Producto[] = await this.productoAdapter.getProductos();

    return res.json(productos);
  };
}
