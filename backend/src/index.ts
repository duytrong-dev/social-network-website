import express, { Express } from 'express'
import appRoutes from './routes/app.routes'
import { API_URL, envConfig } from './config'
import { defaultErrorHandler } from './middlewares/error.middlewares'
import { notFound } from './middlewares/notfound.middlewares'

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1', appRoutes)

app.use(notFound)
app.use(defaultErrorHandler)

app.listen(envConfig.PORT, () => {
  console.log(`Server đang chạy: ${API_URL}`)
})
