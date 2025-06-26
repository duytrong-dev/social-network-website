import { NextFunction, Request, Response } from "express";
import { JsonWebTokenError } from "jsonwebtoken";

export const defaultErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("Error:", err.message);
  if(err instanceof JsonWebTokenError){
    res.status(401).json({
      status: "error",
      message: err.message
    })
    return
  }
  res.status(err.statusCode ?? 500).json({
    status: "error",
    message: err.message === "" ? "Internal Server Error" : err.message,
    errors: err?.errors
  })
}