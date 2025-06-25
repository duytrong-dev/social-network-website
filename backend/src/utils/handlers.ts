import { NextFunction, Request, RequestHandler, Response } from "express";

type AsyncRequestHandler = (req: Request, res: Response, next: NextFunction) => Promise<void | Response>

export const wrapRequestHandler = (handler: AsyncRequestHandler): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}