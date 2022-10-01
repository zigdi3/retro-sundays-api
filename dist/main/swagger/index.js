"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __importDefault(require("./components"));
exports.default = {
    openapi: '3.0.3',
    info: {
        title: 'API-Retro',
        description: '',
        contact: {
            name: 'Sistema RetroGames',
            url: 'https://www.retrogames.com.br',
            email: 'suportes@retrogames.com.br'
        },
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:8085/api',
            description: 'Local Server'
        },
    ],
    components: components_1.default
};
//# sourceMappingURL=index.js.map