"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const type_orm_helper_1 = require("@/infra/adapters/typeorm/type-orm-helper");
const app_1 = __importDefault(require("./config/app"));
const env_1 = __importDefault(require("./config/env"));
type_orm_helper_1.TypeOrmHelper.createConnection('default')
    .then(() => { app_1.default.listen(env_1.default.port, () => console.log(`Server rodando em http://127.0.0.1:${env_1.default.port}`)); })
    .catch(console.error);
//# sourceMappingURL=server.js.map