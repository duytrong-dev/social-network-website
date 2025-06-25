import { GenderType } from "~/constants/type.constants";
import prisma from "~/database"
import { hashPassword } from "~/utils/crypto";

export const createNewUser = async (payload: {email: string, password: string, name: string, birthDate: Date, gender: GenderType}) => {
  const hash = await hashPassword(payload.password)
  const newUser = await prisma.users.create({
    data: {
      email: payload.email,
      password: hash, 
      name: payload.name,
      birthDate: payload.birthDate,
      gender: payload.gender
    }
  })
  return newUser
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: { email }
  })
  return user
}