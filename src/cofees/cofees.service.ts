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

@Injectable()
export class CofeesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}

  findAll() {
    return this.coffeeRepository.find();
  }

  async findOne(id: string) {
    const cofee = await this.coffeeRepository.findOne(id);
    if (!cofee) {
      throw new NotFoundException(`Coffee #${id} not found`);
    }

    return cofee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const cofee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(cofee);
  }

  async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
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
}
