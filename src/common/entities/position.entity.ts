import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('Positions')
export class PositionEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true })
  décription: string
}
