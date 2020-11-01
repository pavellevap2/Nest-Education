import { CofeesService } from './cofees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
export declare class CofeesController {
    private readonly coffeesService;
    constructor(coffeesService: CofeesService);
    findAll(paginationQuery: any): import("./enteties/cofee.entity").Coffee[];
    findOne(id: string): import("./enteties/cofee.entity").Coffee;
    create(createCoffeeDto: CreateCoffeeDto): void;
    update(id: string, updateCofeeDto: UpdateCoffeeDto): void;
    remove(id: string): void;
}
