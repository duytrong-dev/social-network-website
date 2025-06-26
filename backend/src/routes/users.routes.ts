import { wrapRequestHandler } from './../utils/handlers';
import { Router } from 'express'
import { GetMeController } from '~/controllers/users.controller'
import { accessTokenMiddleware } from '~/middlewares/auth.middlewares'
import { verifiedUserMiddleware } from '~/middlewares/users.middlewares';

const usersRoutes: Router = Router()

usersRoutes.get("/me", accessTokenMiddleware, verifiedUserMiddleware, wrapRequestHandler(GetMeController))

export default usersRoutes