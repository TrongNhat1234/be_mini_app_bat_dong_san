import { ConflictException, NotFoundException } from '@nestjs/common'
import { CommandHandler, ICommandHandler, QueryBus } from '@nestjs/cqrs'
import { ApiResponeDto } from '@root/common/dto/api-response.dto'
import { CompanyRepository } from '@root/modules/company/repositories/company.repository'

import { CreateCompanyCommand } from '../impl/create-company.command'

@CommandHandler(CreateCompanyCommand)
export class CreateCompanyCommandHandler implements ICommandHandler<CreateCompanyCommand> {
  constructor(private readonly repository: CompanyRepository) {}
  async execute(command: CreateCompanyCommand): Promise<ApiResponeDto<any>> {
    try {
      const { dto: dto, userId: userId } = command
      const company = await this.repository.findOne({ where: { code: dto.code } })
      if (company) {
        throw new ConflictException('error.codeAlreadyExists')
      }

      const newCompany = this.repository.create({
        code: dto.code,
        name: dto.name,
        address: dto.address,
        interestRate: dto.interestRate,
        description: dto.description,
        logo: dto.logo,
        createdBy: userId,
        createdDate: new Date(),
      })
      await this.repository.save(newCompany)
      return new ApiResponeDto<any>('Success', 201)
    } catch (error) {
      return new ApiResponeDto<any>(error, 500)
    }
  }
}
