"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatedCategoryDto = void 0;
const create_category_dto_1 = require("./create-category.dto");
class CreatedCategoryDto extends create_category_dto_1.CreateCategoryDto {
    id;
    createdAt;
    updatedAt;
    constructor({ id, name, createdAt, updatedAt }) {
        super();
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
exports.CreatedCategoryDto = CreatedCategoryDto;
//# sourceMappingURL=created-category.dto.js.map