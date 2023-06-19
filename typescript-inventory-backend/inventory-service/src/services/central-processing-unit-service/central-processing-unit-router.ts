import express, { type Request, type Response } from 'express'
import { CentralProcessingUnit } from './models/central-processing-unit'
import { CentralProcessingUnitController } from './central-processing-unit-controller'
import { type CentralProcessingUnitInterface } from './interface/central-processing-unit-interface'

export const centralProcessingUnitRoute = express.Router()

const controller = new CentralProcessingUnitController()

centralProcessingUnitRoute.post('/cpu', async (req: Request, res: Response): Promise<void> => {
  const payload = req.body as CentralProcessingUnitInterface
  const cpu: CentralProcessingUnit = new CentralProcessingUnit(payload.maker, payload.model, payload.socketType, payload.price)

  try {
    const savedCpu = await controller.createCpu(cpu)

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
    const cpus = await controller.getCpus()

    res.json({
      cpus
    })
  } catch (err) {
    res.json({
      status: 500,
      message: 'Something went wrong.'
    })
  }
})

centralProcessingUnitRoute.get('/cpu/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const id: string = req.params.id
    const cpu = await controller.getCpuById(id)

    res.json({
      cpu
    })
  } catch (err) {
    res.json({
      status: 500,
      message: 'Something went wrong.'
    })
  }
})
