import express, { type Request, type Response } from 'express'
import { myDataSource } from '../../app-data-source'
import { CentralProcessingUnit } from './models/central-processing-unit'
import { CentralProcessingUnitController } from './central-processing-unit-controller'
import { type CentralProcessingUnitInterface } from './interface/central-processing-unit-interface'

export const centralProcessingUnitRoute = express.Router()

const controller = new CentralProcessingUnitController()

centralProcessingUnitRoute.post('/cpu', async (req: Request, res: Response): Promise<void> => {
  const payload = req.body as CentralProcessingUnitInterface
  const cpu: CentralProcessingUnit = new CentralProcessingUnit(payload.maker, payload.model, payload.socketType, payload.price)

  try {
    const savedCpu = await myDataSource.getRepository(CentralProcessingUnit).save(cpu)

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

centralProcessingUnitRoute.get('/cpu', async (req: Request, res: Response): Promise<void> => {
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

centralProcessingUnitRoute.get('/cpu/:cpuId', (req: Request, res: Response): void => {
  res.json({
    status: 200,
    success: true,
    message: 'You are searching for a specific CPU.'
  })
})
