import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsString } from 'class-validator'

import { PaginationDto } from '../pagination.dto'

export class CompanyForInputDtoDto extends PaginationDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  filterText?: string
}
