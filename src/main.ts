import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const PORT = process.env.APP_PORT || 5000;
  await app.listen(3000, function() {
    console.log( `im starting in port ${PORT}`)
  });
}
bootstrap();
