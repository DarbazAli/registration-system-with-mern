'use strict'
console.clear()

import mongoose from 'mongoose'
import app from './express.js'
import config from '../config/config.js'

/* ------------------ CONNECT TO DB --------------------- */
mongoose.Promise = global.Promise
mongoose
  .connect(config.mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('MongoDB connected successfully')
  })

mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`)
})
/* ---------------- END OF CONNECTION ----------------- */

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`)
})
