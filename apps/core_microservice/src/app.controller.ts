import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ROUTES } from '@innogram/shared';
@Controller(ROUTES.SYSTEM.HEALTH)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  checkHealth() {
    return this.appService.getHealth();
  }
}
