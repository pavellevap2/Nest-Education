import { Cofee } from './enteties/cofee.entity';
export declare class CofeesService {
    private coffees;
    findAll(): Cofee[];
    findOne(id: string): Cofee;
    create(createCoffeeDto: any): void;
    update(id: string, updateCoffeeDto: any): void;
    remove(id: string): void;
}
