import { Router } from 'express'
import { LoginController, LogoutController, RegisterController } from '~/controllers/auth.controllers'
import { validate } from '~/middlewares/validate'
import { LoginBody, RegisterBody } from '~/validations/auth.validations'

const authRoutes: Router = Router()

authRoutes.post('/register', validate(RegisterBody), RegisterController)
authRoutes.post('/login',validate(LoginBody), LoginController)
authRoutes.post('/logout', LogoutController)

export default authRoutes
