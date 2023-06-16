
import express, { type Request, type Response } from 'express'

export const computerProcessingUnitRoute = express.Router()

computerProcessingUnitRoute.post('/cpu', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are adding a new CPU.'
  })
})

computerProcessingUnitRoute.get('/cpu', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are searching for CPUs.'
  })
})

computerProcessingUnitRoute.get('/cpu/:cpuId', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are searching for a specific CPU.'
  })
})
