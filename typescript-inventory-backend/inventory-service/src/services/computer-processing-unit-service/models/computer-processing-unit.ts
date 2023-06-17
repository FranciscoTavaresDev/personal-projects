import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class ComputerProcessingUnit {
  @PrimaryGeneratedColumn()
    id!: number

  @Column('text')
    name!: string

  @Column('text')
    maker!: string

  @Column('text')
    model!: string

  @Column('text')
    socketType!: string

  @Column('numeric')
    clockSpeed!: number

  @Column('numeric')
    hostBusSpeed!: number

  @Column('text')
    cache!: string

  @Column('numeric')
    processSize!: number

  @Column('numeric')
    energyConsumption!: number

  @Column('numeric')
    price!: number
}
