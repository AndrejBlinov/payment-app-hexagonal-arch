import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const PORT = process.env.APP_PORT || 8080;
  await app.listen(PORT, function() {
    console.log( `im starting in port ${PORT}`)
  });
}
bootstrap();
