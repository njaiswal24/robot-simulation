import { FastifyRequest, FastifyReply } from 'fastify';
import { CommandSetService } from './service';
import { ApiResponse } from '../core/types';
import { ValidationError } from '../core/errors';
 import { ExecuteCommandRequest, CommandExecutionResult, SingleCommandResult , RobotCommand} from './model';

export class CommandSetController {
  constructor(private commandSetService: CommandSetService) {}

  async executeCommand(
    req: FastifyRequest<{ Body: ExecuteCommandRequest }>,
    reply: FastifyReply
  ): Promise<ApiResponse<CommandExecutionResult | string>> {
    try {
      const { commands } = req.body;

      const results: SingleCommandResult[] = [];

      for (const command of commands) {
        if (!['MOVE', 'LEFT', 'RIGHT', 'REPORT'].includes(command)) {
          throw new ValidationError(`Invalid command: ${command}`);
        }

        const result = this.commandSetService.executeSingleCommand(
          command as RobotCommand
        );
        results.push(result);
      }

      const finalState = this.commandSetService.getCurrentState();

      return { 
        success: true, 
        data: {
          results
        }
      };
    } catch (error) {
      if (error instanceof ValidationError) {
        reply.code(400);
        return { 
          success: false, 
          error: error.message 
        };
      } else {
        reply.code(500);
        return { 
          success: false, 
          error: "Internal Server Error" 
        };
      }
    }
  }
}
