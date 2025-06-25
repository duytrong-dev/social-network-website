import { NextFunction, Request, Response } from "express"
import { createNewRefreshToken, deleteRefreshToken } from "~/services/refreshToken.services"
import { createNewUser, getUserByEmail } from "~/services/user.services"
import { comparePassword } from "~/utils/crypto"
import { CustomError } from "~/utils/error"
import { signAccessToken, signRefreshToken } from "~/utils/jwt"
import { LoginBodyType, RegisterBodyType } from "~/validations/auth.validations"

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
  const newUser: RegisterBodyType = req.body
  const existingUser = await getUserByEmail(newUser.email)
  if(existingUser) {
    return next(new CustomError("Email đã tồn tại!", 409))
  }
  await createNewUser({email: newUser.email, password: newUser.password, name: newUser.name, birthDate: new Date(newUser.birthDate), gender: newUser.gender})
  return res.status(201).json({
    status: "success",
    message: "Đăng ký thành công", 
  })
}

export const LoginController = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: LoginBodyType = req.body
  const user = await getUserByEmail(email)
  if (!user) {
    return next(new CustomError("Email không tồn tại!", 404))
  }
  const isPasswordMatch = await comparePassword(password, user.password)
  if (!isPasswordMatch) {
    return next(new CustomError("Email hoặc mật khẩu không đúng!" , 401))
  }
  const [accessToken, refreshToken] = await Promise.all([
    signAccessToken({payload: { userId: user.id, name: user.name, email: user.email }}),
    signRefreshToken({payload: { userId: user.id, name: user.name, email: user.email }})
  ])
  const { password: _password, ...userWithoutPassword } = user
  await createNewRefreshToken({token: refreshToken, userId: user.id}) 
  return res.status(200).json({ 
    status: "success",
    message: "Đăng nhập thành công",
    data: {
      user: userWithoutPassword,
      accessToken: accessToken,
      refreshToken: refreshToken
    } 
  })
}

export const LogoutController = async (req: Request, res: Response, next: NextFunction) => {
  const { refreshToken } = req.body
  await deleteRefreshToken(refreshToken)
  return res.status(200).json({ 
    status: "success",
    message: "Đăng xuất thành công",
  })
}