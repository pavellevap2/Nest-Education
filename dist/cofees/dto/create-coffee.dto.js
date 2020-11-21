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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCoffeeDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateCoffeeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { name: { required: true, type: () => String }, brand: { required: true, type: () => String }, flavors: { required: true, type: () => [String] } };
    }
}
__decorate([
    swagger_1.ApiProperty({ description: 'The name of a coffee.' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCoffeeDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'The brand of a coffee.' }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], CreateCoffeeDto.prototype, "brand", void 0);
__decorate([
    swagger_1.ApiProperty({ description: 'The list of flavors.' }),
    class_validator_1.IsString({ each: true }),
    __metadata("design:type", Array)
], CreateCoffeeDto.prototype, "flavors", void 0);
exports.CreateCoffeeDto = CreateCoffeeDto;
//# sourceMappingURL=create-coffee.dto.js.map