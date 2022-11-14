import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OCR_CLIENT_SERVICE } from './app.constansts';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: OCR_CLIENT_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: [
            `amqp://${process.env.QUEUE_USER}:${process.env.QUEUE_PASSWORD}@queue:${process.env.QUEUE_PORT}`,
          ],
          queue: 'ocr',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
