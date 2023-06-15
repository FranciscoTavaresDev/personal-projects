import dotenv from 'dotenv'

dotenv.config()

export default {
  BACK_PORT: process.env.BACK_PORT ?? 8081,
  BACK_HOST: process.env.LOCALHOST ?? 'localhost'
}
