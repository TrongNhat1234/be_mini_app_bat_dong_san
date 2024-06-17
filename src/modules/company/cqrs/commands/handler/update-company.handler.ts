import { ConflictException, NotFoundException } from '@nestjs/common'
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs'
import { ApiResponeDto } from '@root/common/dto/api-response.dto'
import { CompanyRepository } from '@root/modules/company/repositories/company.repository'

import { UpdateCompanyCommand } from '../impl/update-company.command'

@CommandHandler(UpdateCompanyCommand)
export class UpdateCompanyCommandHandler implements ICommandHandler<UpdateCompanyCommand> {
  constructor(private readonly repository: CompanyRepository) {}
  async execute(command: UpdateCompanyCommand): Promise<ApiResponeDto<any>> {
    try {
      const { dto, userId } = command
      const _companyExist = await this.repository.findOne({
        where: {
          code: dto.code,
        },
      })

      const _company = await this.repository.findOne({
        where: {
          id: dto.id,
        },
      })

      if (_companyExist) throw new ConflictException('Code already exists')
      if (!_company) throw new NotFoundException('error.companyNotFound')

      const company = this.repository.merge(_company, dto)
      company.modifiedBy = userId
      company.modifiedDate = new Date()
      await this.repository.save(company)
      return new ApiResponeDto<any>('Success', 201)
    } catch (error) {
      return new ApiResponeDto<any>(error, 500)
    }
  }
}
