import { UserEntity } from '@modules/users/entities/user.entity'
import { ProvinceEntity } from '@root/common/entities/province.entity'
import { Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm'

import { BaseEntity } from './base.entity'
import { CompanyEntity } from './company.entity'

export class AbstractEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn()
  createdUser?: UserEntity

  @Column({ nullable: true })
  createdById?: number

  @OneToOne(() => ProvinceEntity, { nullable: true, onDelete: 'SET NULL' })
  province?: ProvinceEntity
  companies?: CompanyEntity
}
