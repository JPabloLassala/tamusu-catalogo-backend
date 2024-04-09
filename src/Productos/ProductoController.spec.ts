import { Request, Response } from "express";
import { Marcas } from "../Marcas/MarcaSchema";
import {
  Clasificacion,
  Producto,
  ProductoAdapterInterface,
} from "./ProductSchema";
import { ProductoController } from "./ProductoController";

describe("ProductoController", () => {
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

    const productoRepositoryMock: ProductoAdapterInterface = {
      getProductos: jest.fn().mockResolvedValue(productos),
    };
    const productoHandler = new ProductoController(productoRepositoryMock);

    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const req = {
      params: { page: "1" },
    } as unknown as Request;

    await productoHandler.getProductos(req, res);

    expect(productoRepositoryMock.getProductos).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(productos);
  });
});
