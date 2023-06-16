import config from './config/config'
import express from 'express'
import cors from 'cors'
// import { myDataSource } from './app-data-source'
import { computerProcessingUnitRoute } from './services/computer-processing-unit-service/computer-processing-unit-router'

// create and setup express app
export const app = express()
app.use(express.json())
app.use(computerProcessingUnitRoute)
app.use(cors());

// establish database connection
/* myDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!')
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err)
  })
  */

// start the server
app.listen(config.BACK_PORT)

console.log(`Server is running on: http://localhost:${config.BACK_PORT}`)
