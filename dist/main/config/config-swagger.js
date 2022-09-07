"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const no_cache_1 = require("@/main/middlewares/no-cache");
const swagger_1 = __importDefault(require("@/main/swagger"));
const swagger_ui_express_1 = require("swagger-ui-express");
exports.default = (app) => {
    app.use('/api-docs', no_cache_1.noCache, swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(swagger_1.default));
};
//# sourceMappingURL=config-swagger.js.map