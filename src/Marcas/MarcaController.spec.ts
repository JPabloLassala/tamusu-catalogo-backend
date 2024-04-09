import { Response } from "express";
import { MarcaController } from "./MarcaController";
import { MarcaRepositoryInterface } from "./MarcaSchema";

describe("MarcaController", () => {
  it("should return a list of brands", async () => {
    const startingMarcas = ["marca1", "marca2", "VW"];
    const resultMarcas = ["marca1", "marca2", "VOLKSWAGEN"];
    const marcaRepositoryMock: MarcaRepositoryInterface = {
      getMarcas: jest.fn().mockResolvedValue(startingMarcas),
    };
    const marcaController = new MarcaController(marcaRepositoryMock);
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;

    await marcaController.getMarcas(res);

    expect(marcaRepositoryMock.getMarcas).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(resultMarcas);
  });
});
