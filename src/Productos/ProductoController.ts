import { Request, Response } from "express";
import { Producto, ProductoAdapterInterface } from "./ProductSchema";
import { httpStatusCodes } from "../config/http";

export class ProductoController {
  constructor(private readonly productoAdapter: ProductoAdapterInterface) {}

  public async getProductos(req: Request, res: Response) {
    const productos: Producto[] = await this.productoAdapter.getProductos();

    return res.status(httpStatusCodes.OK).json(productos);
  }
}
