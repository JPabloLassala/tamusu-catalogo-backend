import express, { Express } from "express";
import { InitializeMiddlewares } from "./App";
import { envConfig } from "./config/env";

const app: Express = express();

InitializeMiddlewares(app);

app.listen(envConfig.port, () => console.log(`Example app listening on port ${envConfig.port}`));
