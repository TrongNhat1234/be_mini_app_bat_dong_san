import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('Developers')
export class DeveloperEntity extends BaseEntity {
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  address: string
  @Column({ nullable: true })
  website: string
  @Column({ nullable: true })
  descrpition: string
}
