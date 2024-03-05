import { Request, Response } from "express";

export function getImage(req: Request, res: Response) {
  const filePath = `./images/${req.params.id}.png`;
  return res.sendFile(filePath, { root: process.cwd() });
}
