import dotenv from 'dotenv'

dotenv.config()

export default {
  BACK_PORT: process.env.BACK_PORT ?? 8080,
  BACK_HOST: process.env.LOCALHOST ?? 'localhost',
  MY_SQL_URI: process.env.MY_SQL ?? 'mysql://user:password@host:port/dbName'
}
