import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import { KnexConfig } from "./config/knex";
import { createProductoRoutes } from "./Productos/ProductoRoutes";
import { createMarcaRoutes } from "./Marcas/MarcaRoutes";
import { createImageRoutes } from "./Images/ImageRoutes";

const app: Express = express();
const port = 3000;
const sqlite = knex(KnexConfig);

app.use(cors());
app.use("/", createProductoRoutes(sqlite));
app.use("/", createMarcaRoutes(sqlite));
app.use("/", createImageRoutes());

app.listen(port, () => console.log(`Example app listening on port ${port}`));
