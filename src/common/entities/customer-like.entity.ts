import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('CustomerLikes')
export class CustomerLikeEntity extends BaseEntity {
  @Column({ nullable: true })
  realEstateId: number
  @Column({ nullable: true })
  customerId: string
}
