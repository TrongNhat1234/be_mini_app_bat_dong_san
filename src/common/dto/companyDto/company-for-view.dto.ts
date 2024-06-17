import { ApiProperty } from '@nestjs/swagger'
import { IsNumber, IsString } from 'class-validator'

export class CompanyForViewDto {
  @ApiProperty()
  @IsNumber()
  id: number
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
