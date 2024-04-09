import { Request, Response } from "express";
import { httpStatusCodes } from "../config/http";

export class ImageController {
  public getImage(req: Request, res: Response) {
    const filePath = `./images/${req.params.id}.png`;

    res.status(httpStatusCodes.OK).sendFile(filePath, { root: process.cwd() });
  }
}
