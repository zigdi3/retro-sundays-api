"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noCache = void 0;
const noCache = (req, res, next) => {
    res.set('cache-control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.set('pragma', 'no-cache');
    res.set('expires', '0');
    res.set('surrogate-control', 'no-store');
    next();
};
exports.noCache = noCache;
//# sourceMappingURL=no-cache.js.map