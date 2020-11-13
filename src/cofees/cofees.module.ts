import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CofeesController } from './cofees.controller';
import { CofeesService } from './cofees.service';
import { Coffee } from './enteties/cofee.entity';
import { Flavor } from './enteties/flavor.entity';

class ConfigService {}

class DevelopmentConfigService {}

class ProductionConfigService {}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor])], // 👈 Adding Coffee Entity here to TypeOrmModule.forFeature
  controllers: [CofeesController],
  providers: [
    CofeesService,
    {
      provide: 'COFFEE_BRANDS', // 👈
      useValue: ['buddy brew', 'nescafe'], // array of coffee brands,
    },
    {
      provide: ConfigService,
      useClass:
        process.env.NODE_ENV === 'development'
          ? DevelopmentConfigService
          : ProductionConfigService,
    },
  ],
  exports: [CofeesService], //for other modules
})
export class CoffeesModule {}
