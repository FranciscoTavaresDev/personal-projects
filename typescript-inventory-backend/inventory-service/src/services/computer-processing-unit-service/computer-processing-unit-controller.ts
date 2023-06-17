import { type ComputerProcessingUnit } from './models/computer-processing-unit'
import { ComputerProcessingUnitRepository } from './computer-processing-unit-repository'
import { CustomErrorModel } from '../common/models/error'

export class ComputerProcessingUnitController {
  private readonly _repository: ComputerProcessingUnitRepository

  constructor () {
    this._repository = new ComputerProcessingUnitRepository()
  }

  public async getCPUs (): Promise<ComputerProcessingUnit[] | CustomErrorModel> {
    return await this._repository.findAll()
  }
}
