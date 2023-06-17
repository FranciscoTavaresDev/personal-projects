import express, { type Request, type Response } from 'express'
import { myDataSource } from '../../app-data-source'
import { ComputerProcessingUnit } from './models/computer-processing-unit'
import { ComputerProcessingUnitController } from './computer-processing-unit-controller'
import { type ComputerProcessingUnitInterface } from './interface/computer-processing-unit-interface'

export const computerProcessingUnitRoute = express.Router()

const controller = new ComputerProcessingUnitController()

computerProcessingUnitRoute.post('/cpu', async (req: Request, res: Response): Promise<void> => {
  const payload = req.body as ComputerProcessingUnitInterface
  const cpu: ComputerProcessingUnit = new ComputerProcessingUnit(payload.maker, payload.model, payload.socketType, payload.price)

  try {
    const savedCpu = await myDataSource.getRepository(ComputerProcessingUnit).save(cpu)

    res.json({
      ...savedCpu
    })
  } catch (err) {
    res.json({
      status: 500,
      message: 'Something went wrong.'
    })
  }
})

computerProcessingUnitRoute.get('/cpu', async (req: Request, res: Response): Promise<void> => {
  try {
    const cPUs = await controller.getCPUs()

    res.json({
      cPUs
    })
  } catch (err) {
    res.json({
      status: 500,
      message: 'Something went wrong.'
    })
  }
})

computerProcessingUnitRoute.get('/cpu/:cpuId', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are searching for a specific CPU.'
  })
})
