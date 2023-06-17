import { type ComputerProcessingUnit } from './models/computer-processing-unit'
import { ComputerProcessingUnitRepository } from './computer-processing-unit-repository'

export class ComputerProcessingUnitController {
  private readonly _repository: ComputerProcessingUnitRepository

  constructor () {
    this._repository = new ComputerProcessingUnitRepository()
  }

  public async getCPUs (): Promise<ComputerProcessingUnit[]> {
    return await this._repository.findAll()
  }
}
