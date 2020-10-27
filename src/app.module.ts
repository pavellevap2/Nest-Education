import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { CoffeesModule } from './cofees/cofees.module';

@Module({
  imports: [CoffeesModule],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
