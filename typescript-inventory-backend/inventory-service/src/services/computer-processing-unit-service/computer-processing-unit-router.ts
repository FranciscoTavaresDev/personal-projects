
import express, { type Request, type Response } from 'express'
import { myDataSource } from '../../app-data-source'
import { ComputerProcessingUnit } from './models/computer-processing-unit'

export const computerProcessingUnitRoute = express.Router()

computerProcessingUnitRoute.post('/cpu', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are adding a new CPU.'
  })
})

computerProcessingUnitRoute.get('/cpu', async (req: Request, res: Response): Promise<void> => {
  const cPUs = await myDataSource.getRepository(ComputerProcessingUnit).find()
  res.json(cPUs)
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
