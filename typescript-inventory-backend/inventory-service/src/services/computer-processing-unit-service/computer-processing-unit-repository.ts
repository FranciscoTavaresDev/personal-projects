import { Exception } from '@tsed/exceptions'
import { type Repository } from 'typeorm'
import { myDataSource } from '../../app-data-source'
import { CustomErrorModel } from '../common/models/error'
import { ComputerProcessingUnit } from './models/computer-processing-unit'

export class ComputerProcessingUnitRepository {
  private readonly _repo: Repository<ComputerProcessingUnit>

  constructor () {
    this._repo = myDataSource.getRepository(ComputerProcessingUnit)
  }

  public async findAll (): Promise<ComputerProcessingUnit[] | CustomErrorModel> {
    try {
      return await this._repo.find()
    } catch (err) {
      return new CustomErrorModel(400, 'Something went wrong, could not get CPUs.')
    }
  }
}
