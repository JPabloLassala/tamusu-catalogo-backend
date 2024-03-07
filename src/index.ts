import express, { Express } from "express";
import { InitializeMiddlewares } from "./App";
import morgan from "morgan";
import { envConfig } from "./config/env";

const app: Express = express();

InitializeMiddlewares(app);

app.use(morgan("combined"));
app.listen(envConfig.port, () => console.log(`Example app listening on port ${envConfig.port}`));
