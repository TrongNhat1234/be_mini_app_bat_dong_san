import { BaseEntity } from '@common/entities/base.entity'
import { Roles } from '@common/enum/role.enum'
import { Exclude } from 'class-transformer'
import { Column, Entity } from 'typeorm'

@Entity('user')
export class UserEntity extends BaseEntity {
  @Column()
  email: string
  @Column({ nullable: true })
  userName: string
  @Column()
  @Exclude()
  password: string
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  positionId: number
  @Column({
    type: 'enum',
    enum: Roles,
    default: Roles.User,
  })
  role: Roles
}
