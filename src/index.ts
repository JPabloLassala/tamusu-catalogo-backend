import express, { Express } from "express";
import { InitializeMiddlewares } from "./App";

const app: Express = express();
const port = 3000;

InitializeMiddlewares(app);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
