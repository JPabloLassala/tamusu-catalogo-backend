import "dotenv/config";

export interface Config {
  port: number;
  env: string;
  db: {
    path: string;
  };
}

export const envConfig: Config = {
  port: parseInt(process.env.PORT!),
  env: process.env.NODE_ENV!,
  db: {
    path: process.env.DB_PATH!,
  },
};
