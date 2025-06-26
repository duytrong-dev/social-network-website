import prisma from "~/database"
import { NewUserType, UpdateUserType } from "~/types/user.type";
import { hashPassword } from "~/utils/crypto";

export const createNewUser = async (user: NewUserType) => {
  const hash = await hashPassword(user.password)
  const data = {...user, password: hash}
  const newUser = await prisma.users.create({
    data: data
  })
  return newUser
}

export const updateUser = async (user: UpdateUserType) => {
  const userUpdate = prisma.users.update({
    data: user,
    where: {
      id: user.id
    }
  })
  return userUpdate
}

export const getUserByEmail = async (email: string) => {
  const user = await prisma.users.findUnique({
    where: { email },
    include: {
      addresses: true,
      educations: true
    }
  })
  return user
}

export const getUserById = async (id: number) => {
  const user = await prisma.users.findUnique({
    where: { id },
    include: {
      addresses: true,
      educations: true
    }
  })
  return user
}

