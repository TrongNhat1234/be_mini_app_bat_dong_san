import { Query } from '@nestjs-architects/typed-cqrs'
import { PaginationDto } from '@root/common/dto/pagination.dto'
import { CompanyEntity } from '@root/common/entities/company.entity'

export class GetAllCompanyQuery extends Query<CompanyEntity> {
  constructor(public readonly filter: string, public readonly pagination?: PaginationDto) {
    super()
  }
}
