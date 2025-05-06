"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandRepository = void 0;
class CommandRepository {
    constructor() {
        this.commands = ['MOVE', 'LEFT', 'RIGHT', 'REPORT'];
    }
    static getInstance() {
        if (!CommandRepository.instance) {
            CommandRepository.instance = new CommandRepository();
        }
        return CommandRepository.instance;
    }
    getAllCommands() {
        return [...this.commands];
    }
}
exports.CommandRepository = CommandRepository;
//# sourceMappingURL=model.js.map