import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { notFound, errorHandler } from './lib/errorMiddleware.js'

import userRoutes from './routes/userRoutes.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}
// app.use(cors())
// app.use(helmet())

app.get('/', (req, res) => {
  res.send('API is working')
})

// user routes
app.use('/api/users', userRoutes)

/* Handling errors */
app.use(notFound)
app.use(errorHandler)

export default app
