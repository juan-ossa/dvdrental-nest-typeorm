import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    return ['Bienvenido!',"http://localhost:3000/docs/"];
  }
  // getHello(): string {
  //   return 'Hello World!';
  // }
}
