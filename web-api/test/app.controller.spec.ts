import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/app.controller';
import { AppService } from '../src/app.service';
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

  describe('sendFileToQueue', () => {
    it('should call the api service', () => {
      const fileUrl = 'https://google.com';

      appController.sendFileToQueue({ fileUrl: fileUrl });
      expect(mockedAppService.sendFileToQueue).toBeCalledWith(fileUrl);
    });
  });
});
