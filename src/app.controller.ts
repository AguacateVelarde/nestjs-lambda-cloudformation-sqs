import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getEcho(event: any): string {
    return this.appService.getEcho(event);
  }
}
