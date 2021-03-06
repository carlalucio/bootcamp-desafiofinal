"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multerConfig = void 0;
const multer_1 = require("multer");
const crypto_1 = require("crypto");
const http_status_enum_1 = require("../../utils/enums/http-status.enum");
const environment_variables_1 = require("../environment-variables");
const http_exception_provider_1 = require("../../handler-exceptions/http-exception.provider");
const path_1 = require("path");
const directory = (0, path_1.resolve)(__dirname, '..', '..', '..', 'dist', 'uploads');
const storageTypes = {
    local: (0, multer_1.diskStorage)({
        destination: (_req, _file, cb) => {
            cb(null, directory);
        },
        filename: (_req, file, cb) => {
            (0, crypto_1.randomBytes)(16, (err, hash) => {
                file.filename = `${hash.toString('hex')}-${file.originalname}`;
                if (err)
                    cb(err, file.filename);
                cb(null, file.filename);
            });
        },
    }),
};
exports.multerConfig = {
    dest: directory,
    storage: storageTypes[environment_variables_1.env.STORAGE_TYPE ?? 'local'],
    limits: { fileSize: 2 * 1024 * 1024 },
    fileFilter: (_request, file, cb) => {
        const allowedMimes = ['image/jpeg', 'image/pjpeg', 'image/png'];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else
            cb(new http_exception_provider_1.HttpException('Arquivo com formato inválido!', http_status_enum_1.HttpStatus.BAD_REQUEST));
    },
};
//# sourceMappingURL=index.js.map