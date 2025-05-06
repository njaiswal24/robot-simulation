"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildApp = buildApp;
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = require("./maps/routes");
const routes_2 = require("./commands/routes");
const routes_3 = require("./command-sets/routes");
async function buildApp() {
    const app = (0, fastify_1.default)({ logger: true });
    app.register(routes_1.mapRoutes, { prefix: '/api' });
    app.register(routes_2.commandRoutes, { prefix: '/api' });
    app.register(routes_3.commandSetRoutes, { prefix: '/api' });
    app.get('/health', async () => ({ status: 'ok' }));
    return app;
}
//# sourceMappingURL=app.js.map