import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseFilePipeBuilder,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { CommandBus, QueryBus } from '@nestjs/cqrs'
import { FileInterceptor } from '@nestjs/platform-express'
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ComapnyCreateOrEditDto } from '@root/common/dto/companyDto/company-create-or-edit.dto'
import { CompanyForInputDtoDto } from '@root/common/dto/companyDto/company-for-input-dto.dto'
import { PaginationDto } from '@root/common/dto/pagination.dto'
import { AuthUser } from '@root/decorators/auth-user.decorator'
import { JwtAuthGuard } from '@root/guards/jwt-auth.guard'
import { JwtClaimsDto } from '@root/modules/auth/dto/jwt-claims.dto'
import { UploadService } from '@root/shared/upload/upload.service'
import { FastifyRequest } from 'fastify'

import { CreateCompanyCommand } from '../cqrs/commands/impl/create-company.command'
import { DeleteCompanyCommand } from '../cqrs/commands/impl/delete-company.command'
import { UpdateCompanyCommand } from '../cqrs/commands/impl/update-company.command'
import { GetAllCompanyQuery } from '../cqrs/queries/impl/get-all-company.query'

@Controller('company')
@ApiTags('Company')
@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
export class CompanyController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
    private readonly uploadService: UploadService,
  ) {}

  @Get('getAllCompany')
  //@UseGuards(AccessGuard)
  //@UseAbility(Actions.read, CompanyEntity)
  @ApiOperation({
    summary: 'Get all company',
  })
  async getAllCompany(@Query() input: CompanyForInputDtoDto) {
    const pagination = new PaginationDto({ page: input.page, take: input.take, q: 'some query' })
    const query = await this.queryBus.execute(new GetAllCompanyQuery(input.filterText, pagination))
    return query
  }

  @Post('createOrEdit')
  //@UseGuards(AccessGuard)
  @ApiOperation({
    summary: 'Create or Edit company',
  })
  createOrEdit(@AuthUser() user: JwtClaimsDto, @Body() dto: ComapnyCreateOrEditDto) {
    if (dto.id != null) return this.update(user.id, dto)
    else return this.create(user.id, dto)
  }

  private create(userId: number, dto: ComapnyCreateOrEditDto) {
    return this.commandBus.execute(new CreateCompanyCommand(userId, dto))
  }

  private update(userId: number, dto: ComapnyCreateOrEditDto) {
    return this.commandBus.execute(new UpdateCompanyCommand(userId, dto))
  }

  @Delete(':id')
  public delete(@Param('id') id: number, @AuthUser() user: JwtClaimsDto) {
    return this.commandBus.execute(new DeleteCompanyCommand(id, user.id))
  }

  @Post('upload')
  async uploadPhoto(@Req() req: FastifyRequest) {
    return this.uploadService.uploadFile(req)
  }
}
