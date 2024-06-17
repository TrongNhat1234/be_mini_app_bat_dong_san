import { Command } from '@nestjs-architects/typed-cqrs'
import { CompanyEntity } from '@root/common/entities/company.entity'
export class DeleteCompanyCommand extends Command<CompanyEntity> {
  constructor(public readonly id: number, public readonly userId: number) {
    super()
  }
}
