import { Response } from "express";
import { MarcaHandler } from "./MarcaHandler";
import { MarcaAdapterInterface } from "./MarcaSchema";

describe("MarcaHandler", () => {
  it("should return a list of brands", async () => {
    const startingMarcas = ["marca1", "marca2", "VW"];
    const resultMarcas = ["marca1", "marca2", "VOLKSWAGEN"];
    const marcaAdapterMock: MarcaAdapterInterface = {
      getMarcas: jest.fn().mockResolvedValue(startingMarcas),
    };
    const marcaHandler = new MarcaHandler(marcaAdapterMock);
    const res = {
      json: jest.fn(),
    } as unknown as Response;

    await marcaHandler.getMarcas(res);

    expect(marcaAdapterMock.getMarcas).toHaveBeenCalledTimes(1);
    expect(res.json).toHaveBeenCalledWith(resultMarcas);
  });
});
