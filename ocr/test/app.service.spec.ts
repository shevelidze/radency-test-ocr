import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { AppService } from 'src/app.service';
import { NotImageUrlException } from 'src/exceptions';

describe('AppService', () => {
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [AppService],
    }).compile();

    appService = app.get<AppService>(AppService);
  });

  describe('getTextFromFile', () => {
    jest.setTimeout(20000);
    it('should throw an error on a non image url', async () => {
      await expect(
        appService.getTextFromImage('https://google.com'),
      ).rejects.toBeInstanceOf(NotImageUrlException);
    });
    it('should get the text from image', async () => {
      await expect(
        appService.getTextFromImage('https://i.ibb.co/Z1C96Fs/hello-world.png'),
      ).resolves.toBe('hello world\n');
    });
  });
});
