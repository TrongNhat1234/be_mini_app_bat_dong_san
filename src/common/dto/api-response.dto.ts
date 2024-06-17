import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsArray, IsInt, IsOptional, IsString, Max, Min } from 'class-validator'

export class ApiResponeDto<T> {
  @ApiProperty()
  @IsString()
  message: string

  @ApiProperty()
  @IsInt()
  code: number

  @ApiProperty()
  @IsArray()
  @IsOptional()
  data: T
  constructor(message: string, code: number, data?: T) {
    this.message = message
    this.code = code
    this.data = data
  }
}
