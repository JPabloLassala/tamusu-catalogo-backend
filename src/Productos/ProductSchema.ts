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

export type Pesada = "PESADA" | "" | null;
export type Liviana = "LIVIANA" | "" | null;

export interface ProductDTO {
  codigo_capemi: string;
  descripcion: string;
  clasificacion: string;
  OEM: string;
  codigo_completo: string;
  otros_mercados: "";
  Pesada: Pesada;
  Liviana: Liviana;
  marca: string;
  modelo: string;
  lanzamiento: string | null;
}

export interface Producto {
  id: string;
  descripcion: string;
  clasificacion: Clasificacion;
  OEM: string;
  codigo_completo: string;
  otros_mercados: "";
  pesada: boolean;
  liviana: boolean;
  marca: Marcas;
  modelo: string;
  lanzamiento: string | null;
}

export interface ProductoAdapterInterface {
  getProductos: (n: number) => Promise<Producto[]>;
}
