import "dotenv/config";

export enum Environments {
  development = "dev",
  test = "test",
  production = "prod",
}

export interface Config {
  port: number;
  env: Environments;
  db: {
    path: string;
  };
  pageSize: number;
}

export const envConfig: Config = {
  port: parseInt(process.env.PORT!),
  env: process.env.NODE_ENV! as Environments,
  pageSize: parseInt(process.env.PAGE_SIZE!),
  db: {
    path: process.env.DB_PATH!,
  },
};
