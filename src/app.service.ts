import { Inject, Injectable } from '@nestjs/common';
import { TestService } from './test/test.service';


@Injectable()
export class AppService {
  constructor(
    private readonly testService: TestService,
    @Inject('userINfo') private userINfo: { name: string; age: number },
  ) { }

  get(): string {
    return '当前是生产环境'
  }
}
