import { Injectable } from '@nestjs/common';

@Injectable()
export class DevService {
  get() {
    return '当前环境是 dev'
  }
}
