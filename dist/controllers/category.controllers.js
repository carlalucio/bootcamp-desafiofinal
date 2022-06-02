"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const http_status_enum_1 = require("../utils/enums/http-status.enum");
class CategoryController {
    categoryService;
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async getAll(request, response) {
        const categories = await this.categoryService.getAll();
        return response.status(http_status_enum_1.HttpStatus.OK).json(categories);
    }
    async create({ body: { name } }, response) {
        const createdCategory = await this.categoryService.create({ name });
        return response.status(http_status_enum_1.HttpStatus.CREATED).json(createdCategory);
    }
}
exports.CategoryController = CategoryController;
//# sourceMappingURL=category.controllers.js.map