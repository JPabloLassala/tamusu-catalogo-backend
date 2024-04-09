import { Response } from "express";
import { MarcaRepositoryInterface } from "./MarcaSchema";
import { httpStatusCodes } from "../config/http";

export class MarcaController {
  constructor(private readonly marcaRepository: MarcaRepositoryInterface) {}

  public async getMarcas(res: Response) {
    const marcas = await this.marcaRepository.getMarcas();
    const marcasSplit: string[] = marcas.map((marca) => {
      const trimmedMarca = marca.split(" / ").reduce((_, curr) => curr.trim());
      if (trimmedMarca === "VW") {
        return "VOLKSWAGEN";
      }
      return trimmedMarca;
    });
    const marcasUnique = [...new Set(marcasSplit)];

    return res.status(httpStatusCodes.OK).json(marcasUnique);
  }
}
