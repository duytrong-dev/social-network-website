import { wrapRequestHandler } from './../utils/handlers';
import { Router } from 'express'
import { getMe } from '~/controllers/users.controller'
import { accessTokenMiddleware } from '~/middlewares/auth.middlewares'

const usersRoutes: Router = Router()

usersRoutes.get("/me", accessTokenMiddleware, wrapRequestHandler(getMe))

export default usersRoutes