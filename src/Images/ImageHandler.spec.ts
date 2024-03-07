import { Request, Response } from "express";
import { ImageHandler } from "./ImageHandler";

describe("ImageHandler", () => {
  it("should return a file", () => {
    const imageHandler = new ImageHandler();
    const req = { params: { id: "1" } } as unknown as Request;
    const res = {
      sendFile: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const spySendfile = jest.spyOn(res, "sendFile");

    imageHandler.getImage(req, res);

    expect(spySendfile).toHaveBeenCalledWith(`./images/1.png`, {
      root: process.cwd(),
    });
  });
});
