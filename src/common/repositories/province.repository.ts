import { CustomRepository } from '@decorators/typeorm-ex.decorator'
import { Repository } from 'typeorm'

import { ProvinceEntity } from '../entities/province.entity'

@CustomRepository(ProvinceEntity)
export class ProvinceRepository extends Repository<ProvinceEntity> {}
