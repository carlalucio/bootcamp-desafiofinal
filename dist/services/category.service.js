"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryService = void 0;
const created_category_dto_1 = require("../dtos/category/created-category.dto");
const category_entity_1 = require("../entities/category.entity");
const http_exception_provider_1 = require("../handler-exceptions/http-exception.provider");
const http_status_enum_1 = require("../utils/enums/http-status.enum");
class CategoryService {
    connection;
    categoryRepository;
    constructor(connection) {
        this.connection = connection;
        this.categoryRepository = this.connection.getRepository(category_entity_1.CategoryEntity);
    }
    async getAll() {
        try {
            const categories = await this.categoryRepository.find();
            return categories.map((category) => new created_category_dto_1.CreatedCategoryDto(category));
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException('Houve um erro ao listar categorias!', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create({ name }) {
        try {
            const createCategory = this.categoryRepository.create({ name });
            const savedCategory = await this.categoryRepository.save(createCategory);
            return new created_category_dto_1.CreatedCategoryDto(savedCategory);
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException('Houve um erro ao adicionar categoria!', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
}
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map