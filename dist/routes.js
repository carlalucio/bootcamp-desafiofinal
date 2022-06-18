"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const category_controllers_1 = require("./controllers/category.controllers");
const category_service_1 = require("./services/category.service");
const data_source_1 = require("./config/data-source");
const middlewares_1 = require("./middlewares");
const multer_1 = __importDefault(require("multer"));
const multer_2 = require("./config/multer");
const update_product_dto_1 = require("./dtos/product/update-product.dto");
const create_category_dto_1 = require("./dtos/category/create-category.dto");
const create_product_dto_1 = require("./dtos/product/create-product.dto");
const products_controllers_1 = require("./controllers/products.controllers");
const product_service_1 = require("./services/product.service");
const routes = (0, express_1.Router)();
exports.routes = routes;
const categoryController = new category_controllers_1.CategoryController(new category_service_1.CategoryService(data_source_1.AppDataSource));
const productControler = new products_controllers_1.ProductController(new product_service_1.ProductService(data_source_1.AppDataSource));
routes.get('/', (request, response) => {
    return response.json({ status: 'success', version: '1.0.0' }).status(200);
});
routes.get('/categories', (request, response, next) => {
    categoryController.getAll(request, response).catch((error) => {
        next(error);
    });
});
routes.post('/categories', create_category_dto_1.CreateCategoryDto.validators(), middlewares_1.validator, (request, response, next) => {
    categoryController.create(request, response).catch((error) => {
        next(error);
    });
});
routes.get('/products', (request, response, next) => {
    productControler.getAll(request, response).catch((error) => {
        next(error);
    });
});
routes.get('/products/img/:name', (request, response, next) => {
    productControler.getImgByName(request, response).catch((error) => {
        next(error);
    });
});
routes.post('/products', (0, multer_1.default)(multer_2.multerConfig).single('image'), create_product_dto_1.CreateProductDto.validators(), middlewares_1.validator, (request, response, next) => {
    productControler.create(request, response).catch((error) => {
        next(error);
    });
});
routes.get('/products/:id', (request, response, next) => {
    productControler.show(request, response).catch((error) => {
        next(error);
    });
});
routes.put('/products/:id', (0, multer_1.default)(multer_2.multerConfig).single('image'), update_product_dto_1.UpdateProductDto.validators(), middlewares_1.validator, (request, response, next) => {
    productControler.update(request, response).catch((error) => {
        next(error);
    });
});
routes.delete('/products/:id', (request, response, next) => {
    productControler.delete(request, response).catch((error) => {
        next(error);
    });
});
//# sourceMappingURL=routes.js.map