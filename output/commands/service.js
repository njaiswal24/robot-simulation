"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandService = void 0;
const model_1 = require("./model");
class CommandService {
    constructor() {
        this.repository = model_1.CommandRepository.getInstance();
    }
    getAllCommands() {
        try {
            const commands = this.repository.getAllCommands();
            return { success: true, data: commands };
        }
        catch (error) {
            return { success: false, error: 'Failed to retrieve commands' };
        }
    }
}
exports.CommandService = CommandService;
//# sourceMappingURL=service.js.map