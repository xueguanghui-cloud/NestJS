import { Controller, Get, Inject } from '@nestjs/common'
import { AppService } from './app.service'
import { DbService } from './db/db.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('ConfigService') private configService: Record<string, any>,
    private readonly dbService: DbService
  ) { }

  @Get()
  getHello(): string {
    return this.dbService.connect()
    // return this.appService.get() + this.configService.url;
  }
}
