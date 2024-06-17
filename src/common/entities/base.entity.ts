import { Delete } from '@nestjs/common'
import { AggregateRoot } from '@nestjs/cqrs'
import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
export class BaseEntity extends AggregateRoot {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ type: 'timestamp' })
  createdDate: Date

  @UpdateDateColumn({ type: 'timestamp' })
  modifiedDate: Date

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedDate?: Date

  @Column({ nullable: false, default: false })
  isDeleted: boolean

  @Column({ nullable: true })
  createdBy: number

  @Column({ nullable: true })
  modifiedBy: number

  @Column({ nullable: true })
  deletedBy: number
}
