import { BaseEntity } from '@root/common/entities/base.entity'
import { Column, Entity } from 'typeorm'
@Entity('RealEstates')
export class RealEstateEntity extends BaseEntity {
  @Column({ nullable: true })
  name: string
  @Column({ nullable: true })
  code: string
  @Column({ nullable: true, type: 'double' })
  totalPrice: number // giá tổng
  @Column({ nullable: true, type: 'double' })
  pricePerMeter: number // giá trên mét vuông
  @Column({ nullable: true })
  status: string // trạng thái
  @Column({ nullable: true })
  direction: string //hướng
  @Column({ nullable: true })
  overview: string // tổng quan
  @Column({ nullable: true })
  utilities: string //tiện ích
  @Column({ nullable: true })
  location: string // vị trí
  @Column({ nullable: true })
  modelHouse: string //nhà mẫu
  @Column({ nullable: true })
  design: string // thiết kế
  @Column({ nullable: true })
  floorPlan: string //mặt bằng
  @Column({ nullable: true })
  numberBathrooms: number //số lượng phòng tắm
  @Column({ nullable: true })
  numberBedrooms: number //số lượng phòng ngủ
  @Column({ nullable: true })
  typeOwnership: string //hình thức sở hữu
  @Column({ nullable: true, type: 'float' })
  area: number // diện tích
  @Column({ nullable: true })
  developerId: number // chủ đầu tư
  @Column({ nullable: true })
  userId: number // nhân viên
  @Column({ nullable: true })
  provinceId: number
  @Column({ nullable: true })
  districtId: number
  @Column({ nullable: true })
  wardId: number
  @Column({ nullable: true })
  detailedAddress: string //địa chỉ chi tiết
  @Column({ nullable: true })
  transactionType: string // diện tích căn hộ
  @Column({ nullable: true })
  rentalType: string // diện tích căn hộ
  @Column({ nullable: true, type: 'double' })
  rentalPrice: number // diện tích căn hộ
}
