import { Knex } from "knex";
import { envConfig } from "./env";

export const KnexConfig: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: envConfig.db.path,
  },
};
