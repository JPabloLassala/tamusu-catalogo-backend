import { Marcas } from "../Marcas/MarcaSchema";

export enum Clasificacion {
  "ARMADO",
  "BUJE",
  "CRAPODINAS",
  "FUELLE",
  "GOMA",
  "KITS",
  "OTROS",
  "SOPORTE",
  "SUSPENKITS",
}

export interface ProductDTO {
  codigo_capemi: string;
  descripcion: string;
  clasificacion: Clasificacion;
  OEM: string;
  codigo_completo: string;
  otros_mercados: "";
  Pesada: "PESADA" | "" | null;
  Liviana: "LIVIANA" | "" | null;
  marca: Marcas;
  modelo: string;
  lanzamiento: string | null;
}
