"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductDto = void 0;
const express_validator_1 = require("express-validator");
const create_product_dto_1 = require("./create-product.dto");
class UpdateProductDto extends create_product_dto_1.CreateProductDto {
    constructor() {
        super();
    }
    static validators() {
        return [
            (0, express_validator_1.body)('name', 'Valor name não é uma string!').optional().isString(),
            (0, express_validator_1.body)("description", "O campo description deve ser uma string!").optional().isString(),
            (0, express_validator_1.body)("value", "O campo value deve ser um número!").optional().isNumeric(),
            // body("person_count", "O campo person_count deve ser um número!").optional().isNumeric(),
            (0, express_validator_1.body)("disponibility", "O campo disponibility deve ser um booleano!").optional().isBoolean(),
            (0, express_validator_1.body)("categoryId", "O campo categoryId deve ser uma string!").optional().isString(),
            (0, express_validator_1.body)("categoryId", "O campo categoryId deve ser um UUID!").optional().isUUID(),
        ];
    }
}
exports.UpdateProductDto = UpdateProductDto;
//# sourceMappingURL=update-product.dto.js.map