import { FastifyRequest, FastifyReply } from 'fastify';
import { CommandService } from './service';

export class CommandController {
  constructor(private commandService: CommandService) {}

  async getAllCommands(
    _req: FastifyRequest,
    reply: FastifyReply ) {
    const response = this.commandService.getAllCommands();
    if (!response.success) {
      reply.code(500);
    }
    return response;
  }
}