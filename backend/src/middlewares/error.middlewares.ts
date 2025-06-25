import { NextFunction, Request, Response } from "express";

export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  res.status(err.statusCode ?? 500).json({
    status: "error",
    message: err.message === "" ? "Internal Server Error" : err.message,
    errors: err?.errors
  })
}