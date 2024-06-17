import { ProvinceEntity } from '@root/common/entities/province.entity'
import * as fs from 'fs'
import * as path from 'path'

export class ProvinceSeed {
  public seedData(): ProvinceEntity[] | any {
    const filePath = path.join(__dirname, 'seeds', 'Provinces.json')
    const rawData = fs.readFileSync(filePath, 'utf-8')
    const provinces = JSON.parse(rawData)
    // Lưu các user vào cơ sở dữ liệu
    let provinceSeeds: ProvinceEntity[]
    for (const province of provinces) {
      const pro = new ProvinceEntity()
      pro.name = province.name
      pro.slug = province.slug
      pro.type = province.type
      pro.nameWithType = province.nameWithType
      pro.code = province.age
      provinceSeeds.push(pro)
    }
    return provinceSeeds
  }
}
