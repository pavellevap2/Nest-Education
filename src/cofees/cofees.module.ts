import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CofeesController } from './cofees.controller';
import { CofeesService } from './cofees.service';
import { Coffee } from './enteties/cofee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CofeesController],
  providers: [CofeesService],
})
export class CoffeesModule {}
