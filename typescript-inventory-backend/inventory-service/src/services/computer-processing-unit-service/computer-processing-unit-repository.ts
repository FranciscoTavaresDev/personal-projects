import { Exception } from '@tsed/exceptions'
import { type Repository } from 'typeorm'
import { myDataSource } from '../../app-data-source'
import { ComputerProcessingUnit } from './models/computer-processing-unit'

export class ComputerProcessingUnitRepository {
  private readonly _repo: Repository<ComputerProcessingUnit>

  constructor () {
    this._repo = myDataSource.getRepository(ComputerProcessingUnit)
  }

  public async findAll (): Promise<ComputerProcessingUnit[]> {
    try {
      return await this._repo.find()
    } catch (err) {
      throw new Exception(400, 'Could not return CPUs')
    }
  }
}
