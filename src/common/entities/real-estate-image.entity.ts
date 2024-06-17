import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('RealEstateImages')
export class RealEstateImageEntity extends BaseEntity {
  @Column({ nullable: true })
  realEstateId: number
  @Column({ nullable: true })
  type: string
  @Column({ nullable: true })
  link: string
  @Column({ nullable: true })
  filename: string
}
