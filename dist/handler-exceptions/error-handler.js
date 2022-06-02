"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
class ErrorHandler extends Error {
    name;
    statusCode;
    constructor(error, status) {
        super(error.message);
        this.name = error.name;
        this.statusCode = status;
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handler.js.map