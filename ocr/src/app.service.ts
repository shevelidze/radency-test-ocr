import { Injectable } from '@nestjs/common';
import { recognize } from 'tesseract.js';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

import { NotImageUrlException } from './exceptions';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getTextFromImage(imageFileUrl: string): Promise<string> {
    const fileResponse = await lastValueFrom(
      this.httpService.get(imageFileUrl, {
        responseType: 'arraybuffer',
      }),
    );

    if (fileResponse.headers['content-type'].match(/image\/.*/g) === null) {
      throw new NotImageUrlException();
    }

    return (await recognize(fileResponse.data)).data.text;
  }
}
