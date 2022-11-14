import { Controller, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { FileDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  sendFileToQueue(@Body() fileDto: FileDto) {
    this.appService.sendFileToQueue(fileDto.fileUrl);
  }
}
