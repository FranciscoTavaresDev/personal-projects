import config from './config/config'
import express from 'express'
import { myDataSource } from './app-data-source'
import { centralProcessingUnitRoute } from './services/central-processing-unit-service/central-processing-unit-router'
import cors from 'cors'

// create and setup express app
export const app = express()
app.use(express.json())
app.use(centralProcessingUnitRoute)
app.use(cors())

// establish database connection
myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })

// start the server
app.listen(config.BACK_PORT)

console.log(`Server is running on: http://localhost:${config.BACK_PORT}`)
