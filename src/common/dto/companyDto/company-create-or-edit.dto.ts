import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class ComapnyCreateOrEditDto {
  @ApiProperty()
  @IsInt()
  @IsOptional()
  id?: number
  @ApiProperty()
  @IsString()
  code: string
  @ApiProperty()
  @IsString()
  name: string
  @ApiProperty()
  @IsString()
  address: string
  @ApiProperty()
  @IsNumber()
  interestRate: number
  @ApiProperty()
  @IsString()
  description: string
  @ApiProperty()
  @IsString()
  logo: string
}
