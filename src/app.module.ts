import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { AdminController } from './admin/admin.controller';
import { AccountController } from './account/account.controller';
import { CatsService } from './cats/cats.service';
import { HttpController } from './http/http.controller';
import { HttpService } from './http/http.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController, AdminController, AccountController, HttpController],
  providers: [AppService, CatsService], //, HttpService],
})
export class AppModule {}
