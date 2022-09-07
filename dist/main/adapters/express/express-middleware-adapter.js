"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptMiddleware = void 0;
const adaptMiddleware = (middleware) => {
    return async (req, res, next) => {
        const httpRequest = { headers: req.headers };
        const { statusCode, body } = await middleware.handle(httpRequest);
        if (statusCode === 200) {
            Object.assign(req, body);
            next();
        }
        else {
            res.status(statusCode).send({ error: body.error.message });
        }
    };
};
exports.adaptMiddleware = adaptMiddleware;
//# sourceMappingURL=express-middleware-adapter.js.map