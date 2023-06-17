import { plainToInstance } from 'class-transformer'
import express, { type Request, type Response } from 'express'
import { myDataSource } from '../../app-data-source'
import { ComputerProcessingUnit } from './models/computer-processing-unit'
import { ComputerProcessingUnitController } from './computer-processing-unit-controller'

export const computerProcessingUnitRoute = express.Router()

const controller = new ComputerProcessingUnitController()

computerProcessingUnitRoute.post('/cpu', async (req: Request, res: Response): Promise<void> => {
  const cpu: ComputerProcessingUnit = plainToInstance(
    ComputerProcessingUnit,
    req.body as ComputerProcessingUnit,
    { excludeExtraneousValues: true }
  )

  try {
    const savedCpu = await myDataSource.getRepository(ComputerProcessingUnit).save(cpu)

    res.json({
      ...savedCpu,
      status: 201,
      message: 'You have successfully added a new CPU model to the inventory.'
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
      ...cPUs,
      status: 200,
      message: 'You have successfully returned all existing CPU models.'
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
