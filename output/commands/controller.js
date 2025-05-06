"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandController = void 0;
class CommandController {
    constructor(commandService) {
        this.commandService = commandService;
    }
    async getAllCommands(_req, reply) {
        const response = this.commandService.getAllCommands();
        if (!response.success) {
            reply.code(500);
        }
        return response;
    }
}
exports.CommandController = CommandController;
//# sourceMappingURL=controller.js.map