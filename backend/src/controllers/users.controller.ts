import { NextFunction, Request, Response } from "express";
import { getUserById } from "~/services/users.services";
import { CustomError } from "~/utils/error";

export const getMe = async (req: Request, res: Response, next: NextFunction) => {
  const payload = req.body.payload
  const user = await getUserById(payload.userId)
  if(!user) {
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  return res.status(200).json({ 
    status: "success",
    message: "Lấy thông tin người dùng thành công",
    data: {
      user: user
    }
  })
}