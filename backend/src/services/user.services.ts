import prisma from "~/database"
import { hashPassword } from "~/utils/crypto";

export const createNewUser = async (payload: {email: string, password: string, name: string, birthDate: Date}) => {
  try {
    const hash = await hashPassword(payload.password)
    const newUser = await prisma.users.create({
      data: {
        email: payload.email,
        password: hash, 
        name: payload.name,
        birthDate: payload.birthDate
      }
    })
    return newUser
  } catch (error) {
    console.error("Error creating new user:", error);
    throw new Error("Lỗi không thể tạo người dùng mới!");
  }
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.users.findUnique({
      where: { email }
    })
    return user
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Lỗi không thể lấy thông tin người dùng!");
  }
}