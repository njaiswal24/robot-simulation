"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandRoutes = commandRoutes;
const controller_1 = require("./controller");
const service_1 = require("./service");
function commandRoutes(fastify, _options, done) {
    const commandService = new service_1.CommandService();
    const commandController = new controller_1.CommandController(commandService);
    fastify.get('/commands', async (_req, reply) => {
        const response = await commandController.getAllCommands(_req, reply);
        return response;
    });
    done();
}
//# sourceMappingURL=routes.js.map