import { NestFactory } from '@nestjs/core';
import { Context } from 'aws-lambda';
import { AppController } from './app.controller';
import { AppModule } from './app.module';

export const handler = async (event: any, context: Context) => {
  const app = await NestFactory.createApplicationContext(AppModule);
  const echo = app.get<AppController>(AppController).getEcho(event);

  console.log(echo);

  await app.close();
};
