"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
const http_status_enum_1 = require("../utils/enums/http-status.enum");
const error_handler_1 = require("./error-handler");
class HttpException extends error_handler_1.ErrorHandler {
    constructor(response, status = http_status_enum_1.HttpStatus.INTERNAL_SERVER_ERROR) {
        const error = new Error(response);
        error.name = 'HttpException';
        super(error, status);
    }
}
exports.HttpException = HttpException;
//# sourceMappingURL=http-exception.provider.js.map