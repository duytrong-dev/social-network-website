import { Router } from 'express'
import { LoginController, LogoutController, RegisterController } from '~/controllers/auth.controllers'
import { validate } from '~/middlewares/validate.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { LoginBody, LogoutBody, RegisterBody } from '~/validations/auth.validations'

const authRoutes: Router = Router()

authRoutes.post('/register', validate(RegisterBody), wrapRequestHandler(RegisterController))
authRoutes.post('/login',validate(LoginBody), wrapRequestHandler(LoginController))
authRoutes.post('/logout', validate(LogoutBody), wrapRequestHandler(LogoutController))

export default authRoutes
