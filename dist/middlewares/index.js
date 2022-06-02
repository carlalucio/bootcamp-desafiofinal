"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.validator = void 0;
const express_validator_1 = require("express-validator");
const multer_1 = require("multer");
const http_status_enum_1 = require("../utils/enums/http-status.enum");
function validator(request, response, next) {
    const statusCode = http_status_enum_1.HttpStatus.BAD_REQUEST;
    const errors = (0, express_validator_1.validationResult)(request);
    if (!errors.isEmpty()) {
        return response
            .status(statusCode)
            .json({ errors: errors.array(), statusCode });
    }
    next();
}
exports.validator = validator;
function errorHandler(error, _request, response, _next) {
    const errorDto = {
        message: 'Internal server error',
        statusCode: http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR,
    };
    if (error.name === 'Error') {
        if (!error.message) {
            return response.status(errorDto.statusCode).json(errorDto);
        }
        errorDto.message = error.message;
        return response.status(errorDto.statusCode).json(errorDto);
    }
    if (error instanceof multer_1.MulterError) {
        errorDto.message = error.message;
        error.statusCode = http_status_enum_1.HttpStatus.BAD_REQUEST;
    }
    errorDto.message = error.message;
    errorDto.statusCode = error.statusCode;
    return response.status(error.statusCode).json(errorDto);
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=index.js.map