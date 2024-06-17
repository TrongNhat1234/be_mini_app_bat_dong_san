import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('Wards')
export class WardEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  slug: string
  @Column({ nullable: true })
  type: string
  @Column({ nullable: true })
  nameWithType: string
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true })
  parentCode: string
}
