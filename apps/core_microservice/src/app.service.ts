import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth(): { status: string; timestamp: string } {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
  getHello(): string {
    return 'Hello World!';
  }
}
