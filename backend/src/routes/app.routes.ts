import { Request, Response, Router } from 'express'

const appRoutes = Router()

appRoutes.get('/', (req: Request, res: Response) => {
    res.status(200).json({
        data: {
            message: 'Welcome to the API',
            version: '1.0.0',
            status: 'success'
        }
    })
})

export default appRoutes
