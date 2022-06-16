"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("../entities/product.entity");
const http_status_enum_1 = require("../utils/enums/http-status.enum");
const created_product_dto_1 = require("../dtos/product/created-product.dto");
const http_exception_provider_1 = require("../handler-exceptions/http-exception.provider");
class ProductService {
    connection;
    productRepository;
    constructor(connection) {
        this.connection = connection;
        this.productRepository = this.connection.getRepository(product_entity_1.ProductEntity);
    }
    async getAll({ name, disponibility, categoryName }) {
        const filter = {};
        if (name) {
            filter['name'] = (0, typeorm_1.ILike)(`%${name}%`);
        }
        if (categoryName) {
            filter['category'] = { name: (0, typeorm_1.ILike)(`%${categoryName}%`) };
        }
        if (disponibility) {
            filter['disponibility'] =
                typeof disponibility === "string" && disponibility === "true" ? true : false;
        }
        try {
            const products = await this.productRepository.find({ relations: ["category"], where: filter });
            return products.map((product) => new created_product_dto_1.CreatedProductDto(product));
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException('Houve um erro ao listar os produtos!', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create({ categoryId, size, description, disponibility, image, name, value }) {
        try {
            const createProduct = this.productRepository.create({
                category: { id: categoryId },
                size,
                description,
                disponibility: typeof disponibility === 'string' && disponibility === 'true'
                    ? true
                    : false,
                image,
                name,
                value,
            });
            const saveProduct = await this.productRepository.save(createProduct);
            return new created_product_dto_1.CreatedProductDto(saveProduct);
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException("Houve um erro ao cadastrar produto!", http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
    async show(id) {
        try {
            const product = await this.productRepository.findOne({ relations: ['category'], where: { id } });
            if (!product) {
                throw new http_exception_provider_1.HttpException('Curso não encontrado!', http_status_enum_1.HttpStatus.NOT_FOUND);
            }
            return new created_product_dto_1.CreatedProductDto(product);
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException('Houve um erro ao listar o produto', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, { name, description, value, image, size, disponibility, categoryId }) {
        const oldProduct = await this.productRepository.findOne({ relations: ["category"], where: { id } });
        if (!oldProduct) {
            throw new http_exception_provider_1.HttpException('Produto não encontrado!', http_status_enum_1.HttpStatus.NOT_FOUND);
        }
        try {
            const updateProduct = this.productRepository.merge(oldProduct, {
                description,
                disponibility: disponibility === undefined
                    ? undefined
                    : typeof disponibility === 'string' && disponibility === 'true'
                        ? true
                        : false,
                image,
                name,
                value,
                size,
                category: { id: categoryId }
            });
            await this.productRepository.save(updateProduct);
        }
        catch (error) {
            console.log(error);
            throw new http_exception_provider_1.HttpException('Houve um erro ao atualizar curso!', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
    async delete(id) {
        try {
            const product = await this.productRepository.findOne({ where: { id } });
            await this.productRepository.delete(id);
        }
        catch (error) {
            throw new http_exception_provider_1.HttpException('Houve um erro ao excluir curso!', http_status_enum_1.HttpStatus.BAD_REQUEST);
        }
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map