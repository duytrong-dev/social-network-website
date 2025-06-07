import { Request, Response } from "express"
import { createNewUser, getUserByEmail } from "~/services/user.services"
import { comparePassword } from "~/utils/crypto"
import { LoginBodyType, RegisterBodyType } from "~/validations/auth.validations"

export const RegisterController = async (req: Request, res: Response) => {
  const newUser: RegisterBodyType = req.body
  const existingUser = await getUserByEmail(newUser.email)
  if(existingUser) {
    res.status(409).json({ 
      status: "error",
      message: "Email đã tồn tại!" 
    })
    return
  }
  const user = await createNewUser({email: newUser.email, password: newUser.password, name: newUser.name, birthDate: new Date(newUser.birthDate)})
  res.status(201).json({
    status: "success",
    message: "Đăng ký thành công", 
    user: user
  })
}

export const LoginController = async (req: Request, res: Response) => {
  const { email, password }: LoginBodyType = req.body
  const user = await getUserByEmail(email)
  if (!user) {
    res.status(404).json({ 
      status: "error",
      message: "Email không tồn tại!" 
    })
    return
  }
  const isPasswordMatch = await comparePassword(password, user.password)
  if (!isPasswordMatch) {
    res.status(401).json({ 
      status: "error",
      message: "Email hoặc mật khẩu không đúng!" 
    })
    return
  }
  res.status(200).json({ 
    status: "success",
    message: "Đăng nhập thành công", 
  })
}



export const LogoutController = async (req: Request, res: Response) => {
  console.log("LogoutController called")
  res.status(200).json({ 
    status: "success",
    message: "Login successful" 
  })
}