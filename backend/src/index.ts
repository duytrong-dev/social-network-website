import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import appRoutes from './routes/app.routes'

dotenv.config()
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', appRoutes)

app.use((req: Request, res: Response) => {
    const url = req.url
    res.status(404).json({
        message: url + ' not found'
    })
})

const port = process.env.PORT ?? 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
