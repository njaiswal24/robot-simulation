"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSetController = void 0;
const errors_1 = require("../core/errors");
class CommandSetController {
    constructor(commandSetService) {
        this.commandSetService = commandSetService;
    }
    async executeCommand(req, reply) {
        try {
            const { commands } = req.body;
            const results = [];
            for (const command of commands) {
                if (!['MOVE', 'LEFT', 'RIGHT', 'REPORT'].includes(command)) {
                    throw new errors_1.ValidationError(`Invalid command: ${command}`);
                }
                const result = this.commandSetService.executeSingleCommand(command);
                results.push(result);
            }
            const finalState = this.commandSetService.getCurrentState();
            return {
                success: true,
                data: {
                    results
                }
            };
        }
        catch (error) {
            if (error instanceof errors_1.ValidationError) {
                reply.code(400);
                return {
                    success: false,
                    error: error.message
                };
            }
            else {
                reply.code(500);
                return {
                    success: false,
                    error: "Internal Server Error"
                };
            }
        }
    }
}
exports.CommandSetController = CommandSetController;
//# sourceMappingURL=controller.js.map