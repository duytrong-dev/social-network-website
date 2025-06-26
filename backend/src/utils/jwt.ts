import jwt from 'jsonwebtoken';
import { envConfig } from '~/config';

// Tạo access token
export const signAccessToken = ({payload, secretOrPrivateKey = envConfig.ACCESS_TOKEN_SECRET, options = {},}: 
{
  payload: string | object | Buffer
  secretOrPrivateKey?: string
  options?: jwt.SignOptions
}): Promise<string> => {

  const finalOptions: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: envConfig.ACCESS_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn'], 
    ...options,
  }

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretOrPrivateKey, finalOptions, (err, token) => {
      if (err) return reject(err)
      if (!token) return reject(new Error('Tạo token không thành công!'))
      resolve(token)
    })
  })
}

// Tạo refresh token
export const signRefreshToken = ({payload, secretOrPrivateKey = envConfig.REFRESH_TOKEN_SECRET, options = {},}: 
{
  payload: string | object | Buffer
  secretOrPrivateKey?: string
  options?: jwt.SignOptions
}): Promise<string> => {

  const finalOptions: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: envConfig.REFRESH_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn'], 
    ...options,
  }

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretOrPrivateKey, finalOptions, (err, token) => {
      if (err) return reject(err)
      if (!token) return reject(new Error('Tạo token không thành công!'))
      resolve(token)
    })
  })
}

// Tạo email verify token
export const signEmailVerifyToken = ({payload, secretOrPrivateKey = envConfig.EMAIL_VERIFY_TOKEN_SECRET, options = {},}: 
{
  payload: string | object | Buffer
  secretOrPrivateKey?: string
  options?: jwt.SignOptions
}): Promise<string> => {

  const finalOptions: jwt.SignOptions = {
    algorithm: 'HS256',
    expiresIn: envConfig.EMAIL_VERIFY_TOKEN_EXPIRES_IN as jwt.SignOptions['expiresIn'], 
    ...options,
  }

  return new Promise((resolve, reject) => {
    jwt.sign(payload, secretOrPrivateKey, finalOptions, (err, token) => {
      if (err) return reject(err)
      if (!token) return reject(new Error('Tạo token không thành công!'))
      resolve(token)
    })
  })
}

// verify tokens
const verifyToken = (token: string, secretOrPublicKey: string, options: jwt.VerifyOptions): Promise<jwt.JwtPayload | string> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretOrPublicKey, options, (err, decoded) => {
      if (err) return reject(err)
      if (!decoded) return reject(new Error('Xác thực token không thành công!'))
      resolve(decoded)
    })
  })
}

// Xác thực access token
export const verifyAccessToken = ({ token, secretOrPublicKey = envConfig.ACCESS_TOKEN_SECRET, options = {} }: {
  token: string
  secretOrPublicKey?: string,
  options?: jwt.VerifyOptions
}): Promise<jwt.JwtPayload | string> => {
  
  const finalOptions: jwt.VerifyOptions = { algorithms: ['HS256'], ...options }
  return verifyToken(token, secretOrPublicKey, finalOptions)
}

// Xác thực refresh token
export const verifyRefreshToken = ({ token, secretOrPublicKey = envConfig.REFRESH_TOKEN_SECRET, options = {} }: {
  token: string
  secretOrPublicKey?: string,
  options?: jwt.VerifyOptions
}): Promise<jwt.JwtPayload | string> => {
  const finalOptions: jwt.VerifyOptions = { algorithms: ['HS256'], ...options }
  return verifyToken(token, secretOrPublicKey, finalOptions)
}

// Xác thực email verify token
export const verifyEmailVerifyToken = ({ token, secretOrPublicKey = envConfig.EMAIL_VERIFY_TOKEN_SECRET, options = {} }: {
  token: string
  secretOrPublicKey?: string,
  options?: jwt.VerifyOptions
}): Promise<jwt.JwtPayload | string> => {
  const finalOptions: jwt.VerifyOptions = { algorithms: ['HS256'], ...options }
  return verifyToken(token, secretOrPublicKey, finalOptions)
}