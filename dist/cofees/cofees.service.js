"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CofeesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const cofee_entity_1 = require("./enteties/cofee.entity");
let CofeesService = class CofeesService {
    constructor(coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }
    findAll() {
        return this.coffeeRepository.find();
    }
    async findOne(id) {
        const cofee = await this.coffeeRepository.findOne(id);
        if (!cofee) {
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        }
        return cofee;
    }
    create(createCoffeeDto) {
        const cofee = this.coffeeRepository.create(createCoffeeDto);
        return this.coffeeRepository.save(cofee);
    }
    async update(id, updateCoffeeDto) {
        const coffee = await this.coffeeRepository.preload(Object.assign({ id: +id }, updateCoffeeDto));
        if (!coffee) {
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        }
        return this.coffeeRepository.save(coffee);
    }
    async remove(id) {
        const cofee = await this.coffeeRepository.findOne(id);
        return this.coffeeRepository.remove(cofee);
    }
};
CofeesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(cofee_entity_1.Coffee)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CofeesService);
exports.CofeesService = CofeesService;
//# sourceMappingURL=cofees.service.js.map