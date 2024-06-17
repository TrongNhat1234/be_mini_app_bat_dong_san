import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger'

export function setupSwagger(app: INestApplication, version: string): void {
  const options = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion(version)
    .addBearerAuth()
    .addTag('auth', 'Authenticate user')
    .addTag('user', 'Manage user account')
    .build()
  const customOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
    },
    customSiteTitle: 'API Documentation',
  }
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('docs', app, document, customOptions)
}
