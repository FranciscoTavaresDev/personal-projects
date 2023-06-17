import { type Repository } from 'typeorm'
import { myDataSource } from '../../app-data-source'
import { ComputerProcessingUnit } from './models/computer-processing-unit'

export class ComputerProcessingUnitRepository {
  private readonly _repo: Repository<ComputerProcessingUnit>

  constructor () {
    this._repo = myDataSource.getRepository(ComputerProcessingUnit)
  }

  public async findAll (): Promise<ComputerProcessingUnit[]> {
    return await this._repo.find()
  }
}
