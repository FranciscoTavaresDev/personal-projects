import { DataSource } from 'typeorm'
import { ComputerProcessingUnit } from './services/computer-processing-unit-service/models/computer-processing-unit'
import config from './config/config'

export const myDataSource = new DataSource({
  type: 'mysql',
  host: config.DB_HOST,
  port: 3306,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: [ComputerProcessingUnit],
  logging: false,
  synchronize: true
})
