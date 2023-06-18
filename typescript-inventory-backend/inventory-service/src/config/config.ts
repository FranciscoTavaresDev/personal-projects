import dotenv from 'dotenv'

dotenv.config()

export default {
  BACK_PORT: process.env.BACK_PORT ?? 8081,
  BACK_HOST: process.env.BACK_HOST ?? 'localhost',
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME
}
