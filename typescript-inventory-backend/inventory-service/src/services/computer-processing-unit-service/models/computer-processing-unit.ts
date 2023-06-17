import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 } from 'uuid'

@Entity({ name: 'ComputerProcessingUnit', synchronize: true })
export class ComputerProcessingUnit {
  @PrimaryColumn('uuid')
    id: string = v4().toString()

  @Column('text')
    maker: string

  @Column('text')
    model: string

  @Column('text')
    socketType: string

  @Column('numeric')
    price: number

  public getName (): string {
    return `${this.maker} ${this.model}`
  }

  constructor (maker: string, model: string, socketType: string, price: number) {
    this.maker = maker
    this.model = model
    this.socketType = socketType
    this.price = price
  }
}
