"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adaptRoute = void 0;
const adaptRoute = (controller) => {
    return async (req, res) => {
        const httpRequest = {
            body: req.body,
            pathParams: req.params,
            headers: req.headers
        };
        const httpResponse = await controller.handle(httpRequest);
        res.status(httpResponse.statusCode).send(httpResponse.body);
    };
};
exports.adaptRoute = adaptRoute;
//# sourceMappingURL=express-route-adapter.js.map