import { CustomRepository } from '@decorators/typeorm-ex.decorator'
import { CompanyEntity } from '@root/common/entities/company.entity'
import { Repository } from 'typeorm'

@CustomRepository(CompanyEntity)
export class CompanyRepository extends Repository<CompanyEntity> {}
