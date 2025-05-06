import { CommandExecutionResult, RobotCommand ,SingleCommandResult} from './model';

type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

interface RobotManual {
  left: Direction;
  right: Direction;
  advance: [number, number];
}

export class CommandSetService {
  private currentDirection: Direction = 'NORTH';
  private currentPosition: { x: number; y: number } = { x: 0, y: 0 };

  private robotManual: Record<Direction, RobotManual> = {
    'NORTH': { left: 'WEST', right: 'EAST', advance: [0, 1] },
    'SOUTH': { left: 'EAST', right: 'WEST', advance: [0, -1] },
    'EAST': { left: 'NORTH', right: 'SOUTH', advance: [1, 0] },
    'WEST': { left: 'SOUTH', right: 'NORTH', advance: [-1, 0] },
  };

  public executeSingleCommand(
    command: RobotCommand
  ): SingleCommandResult {
    // Capture previous state
    const previousState = {
      position: { ...this.currentPosition },
      direction: this.currentDirection
    };

    // Calculate new state
    let newPosition = { ...this.currentPosition };
    let newDirection = this.currentDirection;
    let output: string | undefined;

    switch (command) {
      case 'MOVE':
        newPosition = this.calculateNewPosition();
        output = this.generateReport();
        break;
      case 'LEFT':
        case 'RIGHT':
        newDirection = this.robotManual[this.currentDirection][command.toLowerCase() as 'left' | 'right'];
        output = this.generateReport();
        break;
      case 'REPORT':
        output = this.generateReport();
        break;
    }

    // Update internal state
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

  private calculateNewPosition(): { x: number; y: number } {
    const movement = this.robotManual[this.currentDirection].advance;
    return {
      x: this.currentPosition.x + movement[0],
      y: this.currentPosition.y + movement[1]
    };
  }

  private generateReport(): string {
    return `Old Position: (${this.currentPosition.x},${this.currentPosition.y}), Direction: ${this.currentDirection}`;
  }

  public getCurrentState() {
    return {
      position: { ...this.currentPosition },
      direction: this.currentDirection
    };
  }
}