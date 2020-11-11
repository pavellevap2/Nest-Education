import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Coffee } from './enteties/cofee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Flavor } from './enteties/flavor.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';

@Injectable()
export class CofeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,

    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,
  ) {}

  findAll(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;
    return this.coffeeRepository.find({
      skip: offset,
      take: limit,
      relations: ['flavors'],
    });
  }

  async findOne(id: string) {
    const cofee = await this.coffeeRepository.findOne(id, {
      relations: ['flavors'],
    });
    if (!cofee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return cofee;
  }

  async create(createCoffeeDto: CreateCoffeeDto) {
    const flavors = await Promise.all(
      createCoffeeDto.flavors.map(name => this.preloadFlavorByName(name)),
    );

    const coffee = this.coffeeRepository.create({
      ...createCoffeeDto,
      flavors,
    });
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const flavors =
      updateCoffeeDto.flavors &&
      (await Promise.all(
        updateCoffeeDto.flavors.map(name => this.preloadFlavorByName(name)),
      ));

    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
      flavors,
    });
    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const cofee = await this.coffeeRepository.findOne(id);
    return this.coffeeRepository.remove(cofee);
  }

  private async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({ name });
    if (existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }
}
