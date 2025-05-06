import { ApiResponse } from '../core/types';

export type RobotCommand = 'MOVE' | 'LEFT' | 'RIGHT' | 'REPORT';

export class CommandRepository {
  private static instance: CommandRepository;
  private commands: RobotCommand[] = ['MOVE', 'LEFT', 'RIGHT', 'REPORT'];

  private constructor() {}

  public static getInstance(): CommandRepository {
    if (!CommandRepository.instance) {
      CommandRepository.instance = new CommandRepository();
    }
    return CommandRepository.instance;
  }

  public getAllCommands(): RobotCommand[] {
    return [...this.commands];
  }
}