import express, { Express } from "express";
import { InitializeMiddlewares } from "./App";
import morgan from "morgan";

const app: Express = express();
const port = 3000;

InitializeMiddlewares(app);

app.use(morgan("combined"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
