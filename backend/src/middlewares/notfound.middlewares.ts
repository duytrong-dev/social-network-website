import { Request, Response } from "express"

export const notFound = (req: Request, res: Response) => {
  const url: string = req.url
  res.status(404).json({
    status: "error",
    message: url + ' not found'
  })
}