import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CofeesController } from './cofees.controller';
import { CofeesService } from './cofees.service';
import { Coffee } from './enteties/cofee.entity';
import { Flavor } from './enteties/flavor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CofeesController],
  providers: [CofeesService],
})
export class CoffeesModule {}
