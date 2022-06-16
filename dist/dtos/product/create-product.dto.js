"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductDto = void 0;
const express_validator_1 = require("express-validator");
const request_dto_1 = require("../request-dto/request.dto");
class CreateProductDto extends request_dto_1.RequestDto {
    name;
    description;
    value;
    size;
    image;
    disponibility;
    categoryId;
    static validators() {
        return [
            (0, express_validator_1.body)('name', 'Valor name não é uma string!').isString(),
            (0, express_validator_1.body)('name', 'O campo name é obrigatório!').notEmpty({ ignore_whitespace: true }),
            (0, express_validator_1.body)("description", "O campo description deve ser uma string!").isString(),
            (0, express_validator_1.body)("description", "O campo description é obrigatório!").notEmpty({ ignore_whitespace: true, }),
            (0, express_validator_1.body)("value", "O campo value deve ser um número!").isNumeric(),
            (0, express_validator_1.body)("value", "O campo value é obrigatório!").notEmpty({ ignore_whitespace: true, }),
            (0, express_validator_1.body)("size", "O campo size deve ser uma string!").isString(),
            (0, express_validator_1.body)("size", "O campo size é obrigatório!").notEmpty({ ignore_whitespace: true, }),
            (0, express_validator_1.body)("disponibility", "O campo disponibility deve ser um booleano!").isBoolean(),
            (0, express_validator_1.body)("disponibility", "O campo disponibility é obrigatório!").notEmpty({ ignore_whitespace: true, }),
            (0, express_validator_1.body)("categoryId", "O campo categoryId é obrigatório!").notEmpty(),
            (0, express_validator_1.body)("categoryId", "O campo categoryId deve ser uma string!").isString(),
            (0, express_validator_1.body)("categoryId", "O campo categoryId deve ser um UUID!").isUUID(),
        ];
    }
}
exports.CreateProductDto = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map