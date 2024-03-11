import { Request, Response } from "express";
import { httpStatusCodes } from "../config/http";

export class ImageHandler {
  public getImage(req: Request, res: Response) {
    const filePath = `./images/${req.params.id}.png`;
    return res
      .status(httpStatusCodes.OK)
      .sendFile(filePath, { root: process.cwd() });
  }
}
