import { DataSource } from 'typeorm'
import { ComputerProcessingUnit } from './services/computer-processing-unit-service/models/computer-processing-unit'

export const myDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'test',
  password: 'test',
  database: 'test',
  entities: [ComputerProcessingUnit],
  logging: true,
  synchronize: true
})
