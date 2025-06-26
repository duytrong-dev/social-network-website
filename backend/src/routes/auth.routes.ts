import { Router } from 'express'
import { EmailVerifyController, ForgotPassWordController, LoginController, LogoutController, RegisterController, ResendVerifyEmailController, ResetPassWordController, VerifyForgotPassWordTokenController } from '~/controllers/auth.controllers'
import { accessTokenMiddleware, emailVerifyTokenMiddleware, forgotPasswordTokenMiddleware, refreshTokenMiddleware } from '~/middlewares/auth.middlewares'
import { validate } from '~/middlewares/validate.middlewares'
import { wrapRequestHandler } from '~/utils/handlers'
import { EmailVerifyBody, ForgotPasswordBody, LoginBody, LogoutBody, RegisterBody, ResetPasswordBody, VerifyForgotPasswordTokenBody } from '~/validations/auth.validations'

const authRoutes: Router = Router()

authRoutes.post('/register', validate(RegisterBody), wrapRequestHandler(RegisterController))
authRoutes.post('/login', validate(LoginBody), wrapRequestHandler(LoginController))
authRoutes.post('/logout', validate(LogoutBody), accessTokenMiddleware, refreshTokenMiddleware, wrapRequestHandler(LogoutController))
authRoutes.post('/email-verify', validate(EmailVerifyBody), emailVerifyTokenMiddleware, wrapRequestHandler(EmailVerifyController))
authRoutes.post('/resend-verify-email', accessTokenMiddleware, wrapRequestHandler(ResendVerifyEmailController))
authRoutes.post('/forgot-password', validate(ForgotPasswordBody), wrapRequestHandler(ForgotPassWordController))
authRoutes.post('/verify-forgot-password-token', validate(VerifyForgotPasswordTokenBody), forgotPasswordTokenMiddleware,  wrapRequestHandler(VerifyForgotPassWordTokenController))
authRoutes.post('/reset-password', validate(ResetPasswordBody), forgotPasswordTokenMiddleware, wrapRequestHandler(ResetPassWordController))

export default authRoutes
