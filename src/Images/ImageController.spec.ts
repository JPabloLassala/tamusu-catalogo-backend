import { Request, Response } from "express";
import { ImageController } from "./ImageController";

describe("ImageController", () => {
  it("should return a file", () => {
    const imageController = new ImageController();
    const req = { params: { id: "1" } } as unknown as Request;
    const res = {
      sendFile: jest.fn(),
      status: jest.fn().mockReturnThis(),
    } as unknown as Response;
    const spySendfile = jest.spyOn(res, "sendFile");

    imageController.getImage(req, res);

    expect(spySendfile).toHaveBeenCalledWith(`./images/1.png`, {
      root: process.cwd(),
    });
  });
});
