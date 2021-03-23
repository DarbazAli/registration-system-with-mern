import mongoose from 'mongoose'
import app from './express.js'
import config from '../config/config.js'

// connect to db

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
