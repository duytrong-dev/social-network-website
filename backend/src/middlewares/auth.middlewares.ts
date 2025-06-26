import { NextFunction, Request, Response } from "express";
import { getRefreshTokenByToken } from "~/services/refreshToken.services";
import { CustomError } from "~/utils/error";
import { verifyAccessToken, verifyEmailVerifyToken, verifyRefreshToken } from "~/utils/jwt";

export const accessTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  if (!accessToken) {
    return next(new CustomError("Access token là bắt buộc!" , 401))
  }
  const payload = await verifyAccessToken({token: accessToken})
  req.body.payload = payload
  return next()
}

export const refreshTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const refreshToken = req.body.refreshToken
  if (!refreshToken) {
    return next(new CustomError("Refresh token là bắt buộc!" , 401))
  }
  await verifyRefreshToken({token: refreshToken})
  const token = await getRefreshTokenByToken(refreshToken)
  if(!token) {
    return next(new CustomError("Refresh token không tồn tại!" , 401))
  }
  return next()
}

export const emailVerifyTokenMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const {emailVerifyToken} = req.body
  if (!emailVerifyToken) {
    return next(new CustomError("Email verify token là bắt buộc!" , 401))
  }
  const payload = await verifyEmailVerifyToken({token: emailVerifyToken})
  console.log(payload)
  req.body.payload = payload
  return next()
}