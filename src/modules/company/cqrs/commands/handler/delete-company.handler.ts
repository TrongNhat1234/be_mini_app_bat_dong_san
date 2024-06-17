import { ConflictException, NotFoundException } from '@nestjs/common'
import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs'
import { ApiResponeDto } from '@root/common/dto/api-response.dto'
import { CompanyRepository } from '@root/modules/company/repositories/company.repository'

import { DeleteCompanyCommand } from '../impl/delete-company.command'

@CommandHandler(DeleteCompanyCommand)
export class DeleteCompanyCommandHandler implements ICommandHandler<DeleteCompanyCommand> {
  constructor(private readonly repository: CompanyRepository) {}
  async execute(command: DeleteCompanyCommand): Promise<ApiResponeDto<any>> {
    try {
      const { id: id, userId: userId } = command
      const company = await this.repository.findOne({ where: { id: id } })
      if (!company) {
        throw new NotFoundException('error.companyNotFound')
      }
      company.isDeleted = true
      company.deletedBy = userId
      company.deletedDate = new Date()
      await this.repository.save(company)
      return new ApiResponeDto<any>('Success', 201)
    } catch (error) {
      return new ApiResponeDto<any>(error, 500)
    }
  }
}
