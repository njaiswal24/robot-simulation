"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandSetRoutes = commandSetRoutes;
const controller_1 = require("./controller");
const service_1 = require("./service");
function commandSetRoutes(fastify, _options, done) {
    const commandSetService = new service_1.CommandSetService();
    const commandSetController = new controller_1.CommandSetController(commandSetService);
    fastify.post('/command-sets/execute', async (req, reply) => {
        const response = await commandSetController.executeCommand(req, reply);
        return response;
    });
    done();
}
//# sourceMappingURL=routes.js.map