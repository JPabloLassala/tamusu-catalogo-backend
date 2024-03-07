import { Request, Response } from "express";
import { Marcas } from "../Marcas/MarcaSchema";
import {
  Clasificacion,
  Producto,
  ProductoAdapterInterface,
} from "./ProductSchema";
import { ProductoHandler } from "./ProductoHandler";

describe("ProductoHandler", () => {
  it("should return a list of products", async () => {
    const productos: Producto[] = [
      {
        id: "1",
        descripcion: "Producto 1",
        clasificacion: Clasificacion.BUJE,
        OEM: "OEM",
        codigo_completo: "codigo_completo",
        otros_mercados: "",
        pesada: false,
        liviana: true,
        marca: Marcas.CHERY,
        modelo: "modelo",
        lanzamiento: "lanzamiento",
      },
      {
        id: "2",
        descripcion: "Producto 2",
        clasificacion: Clasificacion.BUJE,
        OEM: "OEM",
        codigo_completo: "codigo_completo",
        otros_mercados: "",
        pesada: true,
        liviana: false,
        marca: Marcas.CHERY,
        modelo: "modelo",
        lanzamiento: "lanzamiento",
      },
    ];

    const productoAdapterMock: ProductoAdapterInterface = {
      getProductos: jest.fn().mockResolvedValue(productos),
    };
    const productoHandler = new ProductoHandler(productoAdapterMock);

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const req = {
      params: { page: "1" },
    } as unknown as Request;

    await productoHandler.getProductos(req, res);

    expect(productoAdapterMock.getProductos).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(productos);
  });
});
