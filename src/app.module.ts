import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TestService } from './test/test.service';
import { DevService } from './dev/dev.service';
import { config } from 'dotenv';
import path from 'path';
import { devConfig } from './config/dev.config'
import { proConfig } from './config/pro.config';
import { DbService } from './db/db.service';
import { DbConfig } from './config/db.config';

config({
  path: path.join(__dirname, '../.env'),
})

console.log(process.env.NODE_ENV);

// const configService = {
//   provide: 'configService',
//   useClass: process.env.NODE_ENV === 'development' ? DevService : AppService,
// }

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    DevService,
    {
      provide: TestService,
      useClass: TestService,
    },
    {
      provide: 'userINfo',
      useValue: {
        name: 'codexgh',
        age: 22,
      },
    },
    {
      provide: 'ConfigService',
      useValue: process.env.NODE_ENV === 'development' ? devConfig : proConfig,
    },
    {
      provide: 'DbService',
      inject: [DbConfig],
      useFactory(dbConfig: any) {
        console.log(dbConfig)
        // return new DbService(dbConfig)
      },
    },
  ],
})
export class AppModule { }
