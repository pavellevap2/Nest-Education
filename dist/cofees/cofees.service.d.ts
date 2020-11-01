import { Coffee } from './enteties/cofee.entity';
export declare class CofeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: string): Coffee;
    create(createCoffeeDto: any): void;
    update(id: string, updateCoffeeDto: any): void;
    remove(id: string): void;
}
