import { DataSource } from 'typeorm'
import { CentralProcessingUnit } from './services/central-processing-unit-service/models/central-processing-unit'
import config from './config/config'

export const myDataSource = new DataSource({
  type: 'mysql',
  host: config.DB_HOST,
  port: 3306,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: [CentralProcessingUnit],
  logging: false,
  synchronize: true
})
