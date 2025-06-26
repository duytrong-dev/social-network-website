import { Router } from 'express'
import authRoutes from './auth.routes'
import usersRoutes from './users.routes'

const appRoutes: Router = Router()

appRoutes.use('/auth', authRoutes)
appRoutes.use('/users', usersRoutes)

export default appRoutes
