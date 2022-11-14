import { IsUrl } from 'class-validator';

export class FileDto {
  @IsUrl()
  fileUrl: string;
}
