import { CofeesService } from './cofees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
export declare class CofeesController {
    private readonly coffeesService;
    constructor(coffeesService: CofeesService);
    findAll(paginationQuery: PaginationQueryDto): Promise<import("./enteties/cofee.entity").Coffee[]>;
    findOne(id: string): Promise<import("./enteties/cofee.entity").Coffee>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("./enteties/cofee.entity").Coffee>;
    update(id: string, updateCofeeDto: UpdateCoffeeDto): Promise<import("./enteties/cofee.entity").Coffee>;
    remove(id: string): Promise<import("./enteties/cofee.entity").Coffee>;
}
