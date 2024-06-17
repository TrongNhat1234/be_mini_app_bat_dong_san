import { Command } from '@nestjs-architects/typed-cqrs'
import { ComapnyCreateOrEditDto } from '@root/common/dto/companyDto/company-create-or-edit.dto'
import { CompanyEntity } from '@root/common/entities/company.entity'
export class CreateCompanyCommand extends Command<CompanyEntity> {
  constructor(public readonly userId: number, public readonly dto: ComapnyCreateOrEditDto) {
    super()
  }
}
