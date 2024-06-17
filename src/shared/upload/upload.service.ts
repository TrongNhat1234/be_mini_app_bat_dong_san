import { Injectable } from '@nestjs/common'
import { FastifyRequest } from 'fastify'
import { createWriteStream } from 'fs'
import { join } from 'path'
import { pipeline } from 'stream'
import { promisify } from 'util'

const pump = promisify(pipeline)

@Injectable()
export class UploadService {
  async uploadFile(req: FastifyRequest): Promise<any> {
    const data = await req.file()
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    const ext = data.filename.split('.').pop()
    const filename = `${data.fieldname}-${uniqueSuffix}.${ext}`
    const filepath = join(__dirname, '..', '..', 'uploads', filename)

    await pump(data.file, createWriteStream(filepath))

    return {
      originalname: data.filename,
      filename,
      path: filepath,
      mimetype: data.mimetype,
    }
  }
}
