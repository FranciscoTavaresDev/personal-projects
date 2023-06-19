import { type Repository } from 'typeorm'
import { myDataSource } from '../../app-data-source'
import { CentralProcessingUnit } from './models/central-processing-unit'

export class CentralProcessingUnitRepository {
  private readonly _repo: Repository<CentralProcessingUnit>

  constructor () {
    this._repo = myDataSource.getRepository(CentralProcessingUnit)
  }

  public async findAll (): Promise<CentralProcessingUnit[]> {
    return await this._repo.find()
  }
}
