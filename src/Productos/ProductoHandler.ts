import { Request, Response } from "express";
import { Producto, ProductoAdapterInterface } from "./ProductSchema";
import { httpStatusCodes } from "../config/http";

export class ProductoHandler {
  constructor(private readonly productoAdapter: ProductoAdapterInterface) {}

  public async getProductos(req: Request, res: Response) {
    const page = parseInt(req.params.page ?? 0);
    const productos: Producto[] = await this.productoAdapter.getProductos(page);

    return res.status(httpStatusCodes.OK).json(productos);
  }
}
