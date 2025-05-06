export type RobotCommand = 'MOVE' | 'LEFT' | 'RIGHT' | 'REPORT';

export type Direction = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

export interface CommandExecutionResult {
  results: SingleCommandResult[];
}

export interface ExecuteCommandRequest {
  commands: RobotCommand[];
}

export interface SingleCommandResult {
  command: RobotCommand;
  oldPosition: { x: number; y: number };
  oldDirection: Direction;
  newPosition: { x: number; y: number };
  newDirection: Direction;
}



