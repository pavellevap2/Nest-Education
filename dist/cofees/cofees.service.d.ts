import { Repository } from 'typeorm';
import { Coffee } from './enteties/cofee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Flavor } from './enteties/flavor.entity';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
export declare class CofeesService {
    private readonly coffeeRepository;
    private readonly flavorRepository;
    constructor(coffeeRepository: Repository<Coffee>, flavorRepository: Repository<Flavor>);
    findAll(paginationQuery: PaginationQueryDto): Promise<Coffee[]>;
    findOne(id: string): Promise<Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<Coffee>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<Coffee>;
    remove(id: string): Promise<Coffee>;
    private preloadFlavorByName;
}
