"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unauthorized = void 0;
exports.unauthorized = {
    description: 'Requisição inválida',
    content: {
        'application/json': {
            schema: {
                $ref: '#/schemas/error'
            }
        }
    }
};
//# sourceMappingURL=unauthorized.js.map