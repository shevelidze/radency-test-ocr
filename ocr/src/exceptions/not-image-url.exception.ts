import { AppServiceException } from './app-service.exception';

export class NotImageUrlException extends AppServiceException {
  constructor() {
    super('Not an image url.');
  }
}
