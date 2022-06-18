"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const path_1 = require("path");
const http_status_enum_1 = require("../utils/enums/http-status.enum");
class ProductController {
    productService;
    constructor(productService) {
        this.productService = productService;
    }
    async getAll(request, response) {
        const courses = await this.productService.getAll(request.query);
        return response.status(http_status_enum_1.HttpStatus.OK).json(courses);
    }
    async create({ body, file }, response) {
        const course = await this.productService.create({ ...body, image: file?.filename });
        return response.status(http_status_enum_1.HttpStatus.CREATED).json(course);
    }
    async show({ params }, response) {
        const course = await this.productService.show(params.id);
        return response.status(http_status_enum_1.HttpStatus.OK).json(course);
    }
    async update({ body, file, params }, response) {
        await this.productService.update(params.id, { ...body, image: file?.filename });
        return response.status(http_status_enum_1.HttpStatus.NO_CONTENT).json();
    }
    async delete({ params }, response) {
        await this.productService.delete(params.id);
        return response.status(http_status_enum_1.HttpStatus.NO_CONTENT).json();
    }
    async getImgByName({ params }, response) {
        const directory = (0, path_1.resolve)(__dirname, '..', 'uploads');
        return response.status(http_status_enum_1.HttpStatus.OK).sendFile(`${directory}/${params.name}`);
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=products.controllers.js.map