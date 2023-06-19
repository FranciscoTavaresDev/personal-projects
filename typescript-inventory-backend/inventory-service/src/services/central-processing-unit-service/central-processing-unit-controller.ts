import { type CentralProcessingUnit } from './models/central-processing-unit'
import { CentralProcessingUnitRepository } from './central-processing-unit-repository'

export class CentralProcessingUnitController {
  private readonly _repository: CentralProcessingUnitRepository

  constructor () {
    this._repository = new CentralProcessingUnitRepository()
  }

  public async getCPUs (): Promise<CentralProcessingUnit[]> {
    return await this._repository.findAll()
  }
}
