import { NextFunction, Request, Response } from "express"
import { TokenTypeValue } from "~/constants/type.constants"
import { createNewRefreshToken, deleteRefreshToken } from "~/services/refreshTokens.services"
import { createNewUser, getUserByEmail, getUserById, updateUser } from "~/services/users.services"
import { NewRefreshTokenType } from "~/types/refreshToken.type"
import { NewUserType, UpdateUserType } from "~/types/user.type"
import { comparePassword, hashPassword } from "~/utils/crypto"
import { CustomError } from "~/utils/error"
import { signAccessToken, signEmailVerifyToken, signForgotPasswordToken, signRefreshToken } from "~/utils/jwt"
import { LoginBodyType, RegisterBodyType } from "~/validations/auth.validations"

export const RegisterController = async (req: Request, res: Response, next: NextFunction) => {
  const newUser: RegisterBodyType = req.body
  const existingUser = await getUserByEmail(newUser.email)
  if(existingUser) {
    return next(new CustomError("Email đã tồn tại!", 409))
  }
  const userData: NewUserType = {email: newUser.email, password: newUser.password, name: newUser.name, birthDate: new Date(newUser.birthDate), gender: newUser.gender, isVerify: false}
  const user = await createNewUser(userData)
  const emailVerifyToken = await signEmailVerifyToken({payload: { userId: user.id, tokenType: TokenTypeValue.EMAIL_VERIFY_TOKEN }})
  const userUpdate: UpdateUserType = {id: user.id, emailVerifyToken: emailVerifyToken}
  await updateUser(userUpdate)
  return res.status(201).json({
    status: "success",
    message: "Đăng ký thành công. Vui lòng xác minh qua email!", 
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
    signAccessToken({payload: { userId: user.id, tokenType: TokenTypeValue.ACCESS_TOKEN }}),
    signRefreshToken({payload: { userId: user.id, tokenType: TokenTypeValue.REFRESH_TOKEN }})
  ])
  const { password: _password, ...userWithoutPassword } = user
  const token: NewRefreshTokenType = {token: refreshToken, userId: user.id}
  await createNewRefreshToken(token)
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

export const EmailVerifyController = async (req: Request, res: Response, next: NextFunction) => {
  const {emailVerifyToken, payload} = req.body
  const user = await getUserById(payload.userId)
  if(!user){
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  if(user.emailVerifyToken === ""){
    return res.status(200).json({ 
      status: "success",
      message: "Bạn đã xác thực email trước đó!",
    })
  }
  if(user.emailVerifyToken !== emailVerifyToken){
    return next(new CustomError("Token đã hết hạn hoặc đã được sử dụng trước đó!" , 401))
  }
  const userUpdate: UpdateUserType = {id: user.id, emailVerifyToken: "", isVerify: true}
  await updateUser(userUpdate)
  return res.status(200).json({ 
    status: "success",
    message: "Xác thực email thành công",
  })
}

export const ResendVerifyEmailController = async (req: Request, res: Response, next: NextFunction) => {
  const { payload } = req.body
  const user = await getUserById(payload.userId)
  if(!user){
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  if(user.isVerify){
    return res.status(200).json({ 
      status: "success",
      message: "Bạn đã xác thực email trước đó!",
    })
  }
  const emailVerifyToken = await signEmailVerifyToken({payload: { userId: user.id, tokenType: TokenTypeValue.EMAIL_VERIFY_TOKEN }})
  const userUpdate: UpdateUserType = {id: user.id, emailVerifyToken: emailVerifyToken}
  await updateUser(userUpdate)
  return res.status(200).json({
    status: "success",
    message: "Gửi email thành công. Vui lòng xác minh qua email!", 
  })
}

export const ForgotPassWordController = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body
  const user = await getUserByEmail(email)
  if(!user) {
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  const forgotPasswordToken = await signForgotPasswordToken({payload: { userId: user.id, tokenType: TokenTypeValue.FORGOT_PASSWORD_TOKEN }})
  const userUpdate: UpdateUserType = {id: user.id, forgotPasswordToken: forgotPasswordToken}
  await updateUser(userUpdate)
  return res.status(200).json({
    status: "success",
    message: "Vui lòng xác minh qua email!", 
  })
}

export const VerifyForgotPassWordTokenController = async (req: Request, res: Response, next: NextFunction) => {
  const { forgotPasswordToken, payload } = req.body
  const user = await getUserById(payload.userId)
  if(!user){
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  if(user.forgotPasswordToken === ""){
    return res.status(200).json({ 
      status: "success",
      message: "Bạn đã xác thực email trước đó!",
    })
  }
  if(user.forgotPasswordToken !== forgotPasswordToken){
    return next(new CustomError("Token đã hết hạn hoặc đã được sử dụng trước đó!" , 401))
  }
  return res.status(200).json({
    status: "success",
    message: "Xác thực token thành công", 
  })
}

export const ResetPassWordController = async (req: Request, res: Response, next: NextFunction) => {
  const { forgotPasswordToken, payload, password } = req.body
  const user = await getUserById(payload.userId)
  if(!user){
    return next(new CustomError("Không tìm thấy người dùng!" , 404))
  }
  if(user.forgotPasswordToken === ""){
    return res.status(200).json({ 
      status: "success",
      message: "Bạn đã xác thực email trước đó!",
    })
  }
  if(user.forgotPasswordToken !== forgotPasswordToken){
    return next(new CustomError("Token đã hết hạn hoặc đã được sử dụng trước đó!" , 401))
  }
  if(await comparePassword(password, user.password)) {
    return next(new CustomError("Vui lòng không sử dụng mật khẩu trước đó!" , 400))
  }
  const hash = await hashPassword(password)
  const userUpdate: UpdateUserType = {id: user.id, password: hash, forgotPasswordToken: ""}
  await updateUser(userUpdate)
  return res.status(200).json({
    status: "success",
    message: "Đổi mật khẩu thành công", 
  })
}