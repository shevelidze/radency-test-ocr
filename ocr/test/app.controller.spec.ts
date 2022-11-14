import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { mockedAppService } from './app.service.mock';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: mockedAppService,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('handle ocr file event', () => {
    it('should call the app service', () => {
      const fileUrl = 'http://google.com';

      appController.handleOcrFile(fileUrl);
      expect(mockedAppService.getTextFromImage.mock.calls.length).toBe(1);
      expect(mockedAppService.getTextFromImage.mock.calls[0]).toEqual([
        fileUrl,
      ]);
    });
  });
});
