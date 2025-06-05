import { Request, Response, Router } from 'express'
import prisma from '~/database'

const appRoutes = Router()

appRoutes.get('/', async (req: Request, res: Response) => {
    const users = await prisma.users.findMany()
    res.status(200).json({
        data: {
            message: 'Welcome to the API',
            version: '1.0.0',
            status: 'success',
            users: users
        }
    })
})

export default appRoutes
