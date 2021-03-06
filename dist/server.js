"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const environment_variables_1 = require("./config/environment-variables");
const data_source_1 = require("./config/data-source");
const path_1 = require("path");
const index_1 = require("./middlewares/index");
const cors_1 = __importDefault(require("cors"));
const fs_1 = __importDefault(require("fs"));
const PORT = environment_variables_1.env.PORT || 3000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.use((0, cors_1.default)({
    origin: '*',
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'PATCH', 'DELETE'],
}));
app.use(index_1.errorHandler);
app.use('/files', express_1.default.static((0, path_1.resolve)(__dirname, '..', 'uploads')));
const directory = (0, path_1.resolve)(__dirname, '..', 'dist', 'uploads');
fs_1.default.rmSync(directory, { force: true });
fs_1.default.mkdirSync(directory);
data_source_1.AppDataSource.initialize()
    .then(() => {
    app.listen(PORT, () => console.log(`Server in running in port ${PORT}`));
})
    .catch((error) => console.log(error));
//# sourceMappingURL=server.js.map