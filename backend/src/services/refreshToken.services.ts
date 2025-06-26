import prisma from "~/database"
import { NewRefreshTokenType } from "~/types/refreshToken.type";

export const createNewRefreshToken = async (token: NewRefreshTokenType) => {
  const newRefreshToken = await prisma.refresh_Tokens.create({
    data: token
  })
  return newRefreshToken;
}

export const deleteRefreshToken = async (token: string) => {
  const refreshToken = await prisma.refresh_Tokens.delete({
    where: {
      token: token,
    }
  })
  return refreshToken;
}

export const getRefreshTokenByToken = async (token: string) => {
  const refreshToken = await prisma.refresh_Tokens.findFirst({
    where: {
      token: token
    }
  })
  return refreshToken
}