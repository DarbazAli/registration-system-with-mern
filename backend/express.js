import express from 'express'
import bodyParser from 'body-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(compress())
app.use(cors())
app.use(helmet())

app.get('/', (req, res) => {
  res.send('API is working')
})

export default app
