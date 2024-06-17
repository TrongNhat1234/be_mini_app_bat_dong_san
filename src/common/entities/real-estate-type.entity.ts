import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('RealEstateTypes')
export class RealEstateTypeEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  code: string
}
