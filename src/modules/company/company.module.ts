import { TypeOrmExModule } from '@modules/typeorm-ex.module'
import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { UploadService } from '@root/shared/upload/upload.service'
import { CaslModule } from 'nest-casl'

import { permissions } from './casl/user.permission'
import { CompanyController } from './controllers/company.controller'
import { CreateCompanyCommandHandler } from './cqrs/commands/handler/create-company.handler'
import { DeleteCompanyCommandHandler } from './cqrs/commands/handler/delete-company.handler'
import { UpdateCompanyCommandHandler } from './cqrs/commands/handler/update-company.handler'
import { GetAllCompanyQueryHandler } from './cqrs/queries/handler/get-all-company.handler'
import { CompanyRepository } from './repositories/company.repository'

const QueryHandlers = [GetAllCompanyQueryHandler]
const CommandHandlers = [UpdateCompanyCommandHandler, CreateCompanyCommandHandler, DeleteCompanyCommandHandler]

@Module({
  providers: [...QueryHandlers, ...CommandHandlers, UploadService],
  controllers: [CompanyController],
  imports: [
    CqrsModule,
    TypeOrmExModule.forCustomRepository([CompanyRepository]),
    CaslModule.forFeature({
      permissions,
    }),
  ],
})
export class CompanyModule {}
