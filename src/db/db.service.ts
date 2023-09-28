import { Injectable } from '@nestjs/common';

@Injectable()
export class DbService {
  constructor(private readonly options: Record<string, any>) { }
  connect() {
    console.log(this.options);

    return '<h1>链接数据库</h1>'
  }
}
