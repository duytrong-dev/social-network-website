import express, { Express, Request, Response } from 'express'
import appRoutes from './routes/app.routes'
import { API_URL, envConfig } from './config'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', appRoutes)

app.use((req: Request, res: Response) => {
  const url: string = req.url
  res.status(404).json({
    status: "error",
    message: url + ' not found'
  })
})

app.listen(envConfig.PORT, () => {
  console.log(`Server đang chạy: ${API_URL}`)
})
