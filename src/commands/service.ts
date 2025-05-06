import { CommandRepository } from './model';
import { ApiResponse } from '../core/types';

export class CommandService {
  private repository = CommandRepository.getInstance();

  public getAllCommands(): ApiResponse<string[]> {
    try {
      const commands = this.repository.getAllCommands();
      return { success: true, data: commands };
    } catch (error) {
      return { success: false, error: 'Failed to retrieve commands' };
    }
  }
}