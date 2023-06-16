import { Entity, Column, PrimaryColumn } from 'typeorm'
import uuid from 'uuidv4'

@Entity()
export class ComputerProcessingUnit {
  @PrimaryColumn({
    name: 'id',
    type: 'varchar'
  })
    id: string = uuid.uuid()

  @Column('text')
    name: string

  @Column('text')
    maker: string

  @Column('text')
    model: string

  @Column('text')
    socketType: string

  @Column('numeric')
    clockSpeed: number

  @Column('numeric')
    hostBusSpeed: number

  @Column('text')
    cache: string

  @Column('numeric')
    processSize: number

  @Column('numeric')
    energyConsumption: number

  @Column('numeric')
    price: number

  constructor (
    name: string,
    maker: string,
    model: string,
    socketType: string,
    clockSpeed: number,
    hostBusSpeed: number,
    cache: string,
    processSize: number,
    energyConsumption: number,
    price: number) {
    this.name = name
    this.maker = maker
    this.model = model
    this.socketType = socketType
    this.clockSpeed = clockSpeed
    this.hostBusSpeed = hostBusSpeed
    this.cache = cache
    this.processSize = processSize
    this.energyConsumption = energyConsumption
    this.price = price
  }
}
