import { type Repository } from 'typeorm'
import { myDataSource } from '../../app-data-source'
import { CentralProcessingUnit } from './models/central-processing-unit'
import { Exception } from '@tsed/exceptions'

export class CentralProcessingUnitRepository {
  private readonly _repo: Repository<CentralProcessingUnit>

  constructor () {
    this._repo = myDataSource.getRepository(CentralProcessingUnit)
  }

  public async findAll (): Promise<CentralProcessingUnit[]> {
    return await this._repo.find()
  }

  public async findById (id: string): Promise<CentralProcessingUnit> {
    const cpu = await this._repo.findOne({ where: { id } })

    if (cpu == null) {
      throw new Exception(404, 'No CPU matching given id')
    }

    return cpu
  }

  public async createCPU (cpu: CentralProcessingUnit): Promise<CentralProcessingUnit> {
    return await this._repo.save(cpu)
  }
}
