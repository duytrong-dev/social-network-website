import bcrypt from 'bcrypt'
import { envConfig } from '~/config'
const saltRounds = 10

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(saltRounds)
  return bcrypt.hash(password + envConfig.PASSWORD_HASH_SECRET, salt)
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password + envConfig.PASSWORD_HASH_SECRET, hash)
}
