import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { OCR_CLIENT_SERVICE, FILE_OCR_EVENT_PATTERN } from './app.constansts';

@Injectable()
export class AppService {
  constructor(
    @Inject(OCR_CLIENT_SERVICE) private readonly ocrClientService: ClientProxy,
  ) {}

  sendFileToQueue(fileUrl: string) {
    this.ocrClientService.emit(FILE_OCR_EVENT_PATTERN, fileUrl);
  }
}
