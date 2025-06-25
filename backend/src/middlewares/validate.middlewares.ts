import { ZodSchema } from 'zod'
import { Request, Response, NextFunction, RequestHandler } from 'express'
import { ValidateError } from '~/utils/error'

export const validate = (schema: ZodSchema<unknown>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)
    if (!result.success) {
      const unrecognized = result.error.issues.find(
        (issue) => issue.code === 'unrecognized_keys'
      )
      if (unrecognized) {
        return next(new ValidateError('Dữ liệu gửi lên có trường không hợp lệ!', 400, { keys: unrecognized.keys }))
      }
      return next(new ValidateError('Dữ liệu không hợp lệ', 422, result.error.flatten().fieldErrors))
    }
    req.body = result.data
    return next()
  }
}
