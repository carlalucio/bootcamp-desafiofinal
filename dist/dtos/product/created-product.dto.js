"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedProductDto = void 0;
const create_product_dto_1 = require("./create-product.dto");
class CreatedProductDto extends create_product_dto_1.CreateProductDto {
    id;
    createdAt;
    updatedAt;
    category;
    constructor({ id, name, description, value, person_count, image, disponibility, category, createdAt, updatedAt }) {
        super();
        this.id = id;
        this.name = name;
        this.description = description;
        this.value = value;
        this.person_count = person_count;
        this.image = image;
        this.disponibility = disponibility;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.category = category;
    }
}
exports.CreatedProductDto = CreatedProductDto;
//# sourceMappingURL=created-product.dto.js.map