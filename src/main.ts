import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {  I18nValidationPipe } from "nestjs-i18n";
import { I18nValidationExceptionFilter } from 'nestjs-i18n';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //Swagger
  const config = new DocumentBuilder()
    .setTitle('Digital Road API')
    .setDescription('The Digital Road API')
    .setVersion('1.0')
    .addTag('digital road')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);
  //Swagger
  //Validation Error
  app.useGlobalPipes(
    new I18nValidationPipe(),
  );
  app.useGlobalFilters(new I18nValidationExceptionFilter());
  //Validation Error
  await app.listen(3000);
}
bootstrap();
