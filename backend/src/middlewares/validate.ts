import { ZodSchema } from 'zod'
import { Request, Response, NextFunction, RequestHandler } from 'express'

export const validate = (schema: ZodSchema<unknown>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      res.status(422).json({
        status: 'error',
        message: 'Dữ liệu không hợp lệ',
        errors: result.error.flatten().fieldErrors
      })
      return
    }
    req.body = result.data
    next()
  }
}
