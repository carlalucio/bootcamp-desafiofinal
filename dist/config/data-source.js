"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const environment_variables_1 = require("./environment-variables");
//Esse é o nosso arquivo de configuração TypeORM
const development = environment_variables_1.env.NODE_ENV === 'development';
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'sqlite',
    database: development ? 'src/config/database/database.sqlite' : 'dist/src/config/database/database.sqlite',
    synchronize: true,
    logging: false,
    entities: [
        development ? 'src/entities/**/*.entity.ts' : 'dist/entities/**/*.entity.js',
    ],
});
//# sourceMappingURL=data-source.js.map