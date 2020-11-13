"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const cofees_controller_1 = require("./cofees.controller");
const cofees_service_1 = require("./cofees.service");
const cofee_entity_1 = require("./enteties/cofee.entity");
const flavor_entity_1 = require("./enteties/flavor.entity");
class ConfigService {
}
class DevelopmentConfigService {
}
class ProductionConfigService {
}
let CoffeesModule = class CoffeesModule {
};
CoffeesModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([cofee_entity_1.Coffee, flavor_entity_1.Flavor])],
        controllers: [cofees_controller_1.CofeesController],
        providers: [
            cofees_service_1.CofeesService,
            {
                provide: 'COFFEE_BRANDS',
                useValue: ['buddy brew', 'nescafe'],
            },
            {
                provide: ConfigService,
                useClass: process.env.NODE_ENV === 'development'
                    ? DevelopmentConfigService
                    : ProductionConfigService,
            },
        ],
        exports: [cofees_service_1.CofeesService],
    })
], CoffeesModule);
exports.CoffeesModule = CoffeesModule;
//# sourceMappingURL=cofees.module.js.map