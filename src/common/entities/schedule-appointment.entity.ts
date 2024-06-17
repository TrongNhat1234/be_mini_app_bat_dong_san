import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('ScheduleAppointments')
export class ScheduleAppointmentEntity extends BaseEntity {
  @Column({ nullable: true })
  customerId: number
  @Column({ nullable: true })
  realEstateId: number
  @Column({ nullable: true })
  mail: string
  @Column({ nullable: true })
  phone: string
  @Column({ nullable: true, type: 'datetime' })
  contactDate: Date
}
