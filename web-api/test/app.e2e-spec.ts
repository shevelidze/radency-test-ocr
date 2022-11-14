import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { OCR_CLIENT_SERVICE, FILE_OCR_EVENT_PATTERN } from 'src/app.constansts';
import { mockedOcrServiceClient } from './ocr-service-client.mock';
import { AppService } from 'src/app.service';
import { AppController } from 'src/app.controller';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        AppService,
        { provide: OCR_CLIENT_SERVICE, useValue: mockedOcrServiceClient },
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (POST)', async () => {
    const fileUrl = 'https://google.com';

    const response = await request(app.getHttpServer())
      .post('/')
      .send({ fileUrl });

    expect(response.status).toBe(201);
    expect(response.body).toEqual({});
    expect(mockedOcrServiceClient.emit).toBeCalledWith(
      FILE_OCR_EVENT_PATTERN,
      fileUrl,
    );
  });
});
