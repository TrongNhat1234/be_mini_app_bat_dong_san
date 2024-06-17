import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('ProjectImages')
export class ProjectImageEntity extends BaseEntity {
  @Column({ nullable: true })
  projectId: number
  @Column({ nullable: true })
  type: string
  @Column({ nullable: true })
  link: string
  @Column({ nullable: true })
  filename: string
}
