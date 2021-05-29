import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEcho(data: any): any {
    return data;
  }
}
