import { Response } from "express";
import { Producto, ProductoAdapterInterface } from "./ProductSchema";
import { httpStatusCodes } from "../config/http";

export class ProductoHandler {
  constructor(private readonly productoAdapter: ProductoAdapterInterface) {}

  getProductos = async (res: Response) => {
    const productos: Producto[] = await this.productoAdapter.getProductos();

    return res.status(httpStatusCodes.OK).json(productos);
  };
}
