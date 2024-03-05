import { Response } from "express";

interface MarcaAdapterInterface {
  getMarcas: () => Promise<string[]>;
}

export class MarcaHandler {
  constructor(private readonly marcaAdapter: MarcaAdapterInterface) {}

  getMarcas = async (res: Response) => {
    const marcas = await this.marcaAdapter.getMarcas();
    const marcasSplit: string[] = marcas.map((marca) => {
      const trimmedMarca = marca.split(" / ").reduce((_, curr) => curr.trim());
      if (trimmedMarca === "VW") {
        return "VOLKSWAGEN";
      }
      return trimmedMarca;
    });
    const marcasUnique = [...new Set(marcasSplit)];

    return res.json(marcasUnique);
  };
}
