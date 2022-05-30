import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();

  const config = new DocumentBuilder()
    .setTitle('DVD Rental Docs')
    .setDescription('Descripcion de los APIs')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT);
  logger.log(`Escuchando por el puerto ${PORT}  y url ${await app.getUrl()}`);
}
bootstrap();
