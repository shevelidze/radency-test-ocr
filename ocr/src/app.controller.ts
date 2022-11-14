import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AppService } from './app.service';

import { FILE_OCR_EVENT_PATTERN } from './app.constansts';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern(FILE_OCR_EVENT_PATTERN)
  async handleOcrFile(fileUrl: string) {
    try {
      console.log(await this.appService.getTextFromImage(fileUrl));
    } catch (e) {
      console.log('Failed to recognize the text.');
      if (e.message) {
        console.log(e.message);
      }
    }
  }
}
