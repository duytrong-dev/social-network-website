import { NextFunction, Request, Response } from "express";
import { getUserById } from "~/services/users.services";
import { CustomError } from "~/utils/error";

export const verifiedUserMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const { payload } = req.body
  const user = await getUserById(payload.userId)
  if(!user){
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  if(!user.isVerify){
    return next(new CustomError("Người dùng chưa xác thực email!" , 403))
  }
  return next()
}