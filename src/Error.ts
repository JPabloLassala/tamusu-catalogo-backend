import { NextFunction, Request, Response } from "express";

export function globalExceptionLayer(error: any, req: Request, res: Response, next: NextFunction) {
  console.error(">>>>>>>>>>>>>>>>>>", error);

  const message = error instanceof Error ? error.message : "Internal Server Error";
  const statusCode = error instanceof Error ? 400 : 500;

  return res.status(statusCode).json({ error: true, message });

  next();
}
