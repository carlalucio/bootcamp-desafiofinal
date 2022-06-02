"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCategoryDto = void 0;
const express_validator_1 = require("express-validator");
const request_dto_1 = require("../request-dto/request.dto");
class CreateCategoryDto extends request_dto_1.RequestDto {
    name;
    static validators() {
        return [
            (0, express_validator_1.body)('name', 'Valor name não é uma string!').isString(),
            (0, express_validator_1.body)('name', 'O campo name é obrigatório!').notEmpty({ ignore_whitespace: true }),
        ];
    }
}
exports.CreateCategoryDto = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map