import prisma from "~/database"

export const createNewRefreshToken = async (payload: {token: string, userId: number}) => {
  const newRefreshToken = await prisma.refresh_Tokens.create({
    data: {
      token: payload.token,
      userId: payload.userId,
    }
  })
  return newRefreshToken;
}

export const deleteRefreshToken = async (token: string) => {
  const deletedRefreshToken = await prisma.refresh_Tokens.delete({
    where: {
      token: token,
    }
  })
  return deletedRefreshToken;
}
