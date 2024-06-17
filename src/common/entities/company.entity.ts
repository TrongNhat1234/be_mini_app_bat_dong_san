import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('Companies')
export class CompanyEntity extends BaseEntity {
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  address: string
  @Column({ nullable: true, type: 'float' })
  interestRate: number
  @Column({ nullable: true })
  description: string
  @Column({ nullable: true, type: 'longtext' })
  logo: string
}
