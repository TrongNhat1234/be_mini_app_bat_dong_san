import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('Projects')
export class ProjectEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true })
  projectScale: string //quy mô dự án
  @Column({ nullable: true })
  startYear: number //năm khởi công
  @Column({ nullable: true })
  handoverYear: number // năm bàn giao
  @Column({ nullable: true })
  typeOwnership: string //hình thức sở hữu
  @Column({ nullable: true, type: 'float' })
  buildingDensity: number // mật độ xây dựng
  @Column({ nullable: true })
  developerId: number
  @Column({ nullable: true })
  userId: number
  @Column({ nullable: true, type: 'float' })
  area: number // diện tích
  @Column({ nullable: true })
  overview: string // tổng quan
  @Column({ nullable: true })
  modelHouse: string //nhà mẫu
  @Column({ nullable: true })
  design: string // thiết kế
  @Column({ nullable: true })
  floorPlan: string //mặt bằng
  @Column({ nullable: true })
  utilities: string //tiện ích
  @Column({ nullable: true })
  location: string // vị trí
  @Column({ nullable: true })
  provinceId: number
  @Column({ nullable: true })
  districtId: number
  @Column({ nullable: true })
  wardId: number
  @Column({ nullable: true })
  detailedAddress: string //địa chỉ chi tiết
  @Column({ nullable: true, type: 'float' })
  apartmentSize: number // diện tích căn hộ
}
