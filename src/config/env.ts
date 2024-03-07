import "dotenv/config";

export interface Config {
  port: number;
  env: string;
  db: {
    path: string;
  };
  pageSize: number;
}

export const envConfig: Config = {
  port: parseInt(process.env.PORT!),
  env: process.env.NODE_ENV!,
  pageSize: parseInt(process.env.PAGE_SIZE!),
  db: {
    path: process.env.DB_PATH!,
  },
};
