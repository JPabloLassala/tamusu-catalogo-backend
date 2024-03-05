import { Knex } from "knex";

export const KnexConfig: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: "./Articulos.db",
  },
};
