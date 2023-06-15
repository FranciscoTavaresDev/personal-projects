import express from 'express'
import config from './config/config'

const app = express()

// declare a route with a response
app.get('/', (req, res) => {
  res.send("What's up doc ?!")
})

// start the server
app.listen(config.BACK_PORT, () => {
  console.log(`Server is running on: http://${config.BACK_HOST}:${config.BACK_PORT}`)
})
