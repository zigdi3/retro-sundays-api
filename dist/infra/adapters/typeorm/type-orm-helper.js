"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmHelper = void 0;
const typeorm_1 = require("typeorm");
exports.TypeOrmHelper = {
    connection: null,
    async createConnection(env) {
        const connectionOptions = await (0, typeorm_1.getConnectionOptions)(env);
        this.connection = await (0, typeorm_1.createConnection)({ ...connectionOptions, name: 'default' });
        return this.connection;
    },
    async closeConnection() {
        await this.connection.close();
        this.connection = null;
    }
};
//# sourceMappingURL=type-orm-helper.js.map