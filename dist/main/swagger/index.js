"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const components_1 = __importDefault(require("./components"));
exports.default = {
    openapi: '3.0.3',
    info: {
        title: 'API-Unidas-PIX',
        description: '',
        contact: {
            name: 'Sistemas Seminovos',
            url: 'https://www.unidas.com.br',
            email: 'sistemas.seminovos@unidas.com.br'
        },
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:5050/api',
            description: 'Local Server'
        },
        {
            url: 'http://hmlprojetos.unidas.com.br:5050/api',
            description: 'Development Server'
        }
    ],
    components: components_1.default
};
//# sourceMappingURL=index.js.map