"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyParserUrlEnconded = exports.bodyParser = void 0;
const express_1 = require("express");
exports.bodyParser = (0, express_1.json)();
exports.bodyParserUrlEnconded = (0, express_1.urlencoded)({ extended: true });
//# sourceMappingURL=body-parser.js.map