"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
let ProductEntity = class ProductEntity {
    id;
    name;
    description;
    value;
    person_count;
    image;
    disponibility;
    createdAt;
    updatedAt;
    category;
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
], ProductEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false })
], ProductEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false })
], ProductEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false })
], ProductEntity.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'float', nullable: false })
], ProductEntity.prototype, "person_count", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false })
], ProductEntity.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', nullable: false })
], ProductEntity.prototype, "disponibility", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' })
], ProductEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' })
], ProductEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => category_entity_1.CategoryEntity, (category) => category.products, {
        onDelete: 'CASCADE',
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id', referencedColumnName: 'id' })
], ProductEntity.prototype, "category", void 0);
ProductEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'products' })
], ProductEntity);
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=product.entity.js.map