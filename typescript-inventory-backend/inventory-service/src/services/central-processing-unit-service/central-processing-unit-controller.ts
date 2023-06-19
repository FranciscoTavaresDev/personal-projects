import { type CentralProcessingUnit } from './models/central-processing-unit'
import { CentralProcessingUnitRepository } from './central-processing-unit-repository'

export class CentralProcessingUnitController {
  private readonly _repository: CentralProcessingUnitRepository

  constructor () {
    this._repository = new CentralProcessingUnitRepository()
  }

  public async getCpus (): Promise<CentralProcessingUnit[]> {
    return await this._repository.findAll()
  }

  public async getCpuById (id: string): Promise<CentralProcessingUnit> {
    return await this._repository.findById(id)
  }

  public async createCpu (cpu: CentralProcessingUnit): Promise<CentralProcessingUnit> {
    return await this._repository.createCPU(cpu)
  }
}
