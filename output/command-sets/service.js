"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSetService = void 0;
class CommandSetService {
    constructor() {
        this.currentDirection = 'NORTH';
        this.currentPosition = { x: 0, y: 0 };
        this.robotManual = {
            'NORTH': { left: 'WEST', right: 'EAST', advance: [0, 1] },
            'SOUTH': { left: 'EAST', right: 'WEST', advance: [0, -1] },
            'EAST': { left: 'NORTH', right: 'SOUTH', advance: [1, 0] },
            'WEST': { left: 'SOUTH', right: 'NORTH', advance: [-1, 0] },
        };
    }
    executeSingleCommand(command) {
        const previousState = {
            position: Object.assign({}, this.currentPosition),
            direction: this.currentDirection
        };
        let newPosition = Object.assign({}, this.currentPosition);
        let newDirection = this.currentDirection;
        let output;
        switch (command) {
            case 'MOVE':
                newPosition = this.calculateNewPosition();
                output = this.generateReport();
                break;
            case 'LEFT':
            case 'RIGHT':
                newDirection = this.robotManual[this.currentDirection][command.toLowerCase()];
                output = this.generateReport();
                break;
            case 'REPORT':
                output = this.generateReport();
                break;
        }
        this.currentPosition = newPosition;
        this.currentDirection = newDirection;
        return {
            command,
            oldPosition: previousState.position,
            oldDirection: previousState.direction,
            newPosition,
            newDirection
        };
    }
    calculateNewPosition() {
        const movement = this.robotManual[this.currentDirection].advance;
        return {
            x: this.currentPosition.x + movement[0],
            y: this.currentPosition.y + movement[1]
        };
    }
    generateReport() {
        return `Old Position: (${this.currentPosition.x},${this.currentPosition.y}), Direction: ${this.currentDirection}`;
    }
    getCurrentState() {
        return {
            position: Object.assign({}, this.currentPosition),
            direction: this.currentDirection
        };
    }
}
exports.CommandSetService = CommandSetService;
//# sourceMappingURL=service.js.map