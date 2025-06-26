import { Router } from 'express'
import { EmailVerifyController, LoginController, LogoutController, RegisterController } from '~/controllers/auth.controllers'
import { accessTokenMiddleware, emailVerifyTokenMiddleware, refreshTokenMiddleware } from '~/middlewares/auth.middlewares'
import { validate } from '~/middlewares/validate.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { EmailVerifyBody, LoginBody, LogoutBody, RegisterBody } from '~/validations/auth.validations'

const authRoutes: Router = Router()

authRoutes.post('/register', validate(RegisterBody), wrapRequestHandler(RegisterController))
authRoutes.post('/login', validate(LoginBody), wrapRequestHandler(LoginController))
authRoutes.post('/logout', validate(LogoutBody), accessTokenMiddleware, refreshTokenMiddleware, wrapRequestHandler(LogoutController))
authRoutes.post('/email-verify', validate(EmailVerifyBody), emailVerifyTokenMiddleware, wrapRequestHandler(EmailVerifyController))

export default authRoutes
