import { Request, Response } from "express";

export class ImageHandler {
  getImage = (req: Request, res: Response) => {
    const filePath = `./images/${req.params.id}.png`;
    return res.sendFile(filePath, { root: process.cwd() });
  };
}
