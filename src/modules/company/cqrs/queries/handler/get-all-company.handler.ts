import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { ApiResponeDto } from '@root/common/dto/api-response.dto'
import { CompanyForViewDto } from '@root/common/dto/companyDto/company-for-view.dto'
import { PageMetaDto } from '@root/common/dto/page-meta.dto'
import { PaginationResponseDto } from '@root/common/dto/pagination-response.dto'
import { CompanyRepository } from '@root/modules/company/repositories/company.repository'
import { plainToInstance } from 'class-transformer'
import { Like } from 'typeorm'

import { GetAllCompanyQuery } from '../impl/get-all-company.query'

@QueryHandler(GetAllCompanyQuery)
export class GetAllCompanyQueryHandler implements IQueryHandler<GetAllCompanyQuery> {
  constructor(private readonly companyRepository: CompanyRepository) {}
  async execute(query: GetAllCompanyQuery): Promise<ApiResponeDto<PaginationResponseDto<CompanyForViewDto>>> {
    try {
      const company = await this.companyRepository.find({
        select: ['id', 'code', 'address', 'name', 'interestRate', 'description', 'logo'],
        where: [{ name: Like(`%${query.filter}%`) }, { code: Like(`%${query.filter}%`) }],
        skip: query.pagination.skip,
        take: query.pagination.take,
      })
      const companyViewDto = plainToInstance(CompanyForViewDto, company)
      const itemsCount = await this.companyRepository.count({
        where: [{ name: Like(`%${query.filter}%`) }, { code: Like(`%${query.filter}%`) }],
      })
      const pagemeta = new PageMetaDto(query.pagination, itemsCount)
      const paginationPesponse = new PaginationResponseDto<CompanyForViewDto>(companyViewDto, pagemeta)
      return new ApiResponeDto<PaginationResponseDto<CompanyForViewDto>>('Success', 200, paginationPesponse)
    } catch (error) {
      return new ApiResponeDto<PaginationResponseDto<CompanyForViewDto>>(error, 500)
    }
  }
}
