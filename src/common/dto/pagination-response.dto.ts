import { ApiProperty } from '@nestjs/swagger'

import { PageMetaDto } from './page-meta.dto'

export class PaginationResponseDto<T> {
  @ApiProperty()
  readonly result: T[]

  @ApiProperty({ type: PageMetaDto })
  readonly pagination: PageMetaDto

  constructor(result: T[], meta: PageMetaDto) {
    this.result = result
    this.pagination = meta
  }
}
