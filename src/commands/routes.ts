import { FastifyInstance } from 'fastify';
import { CommandController } from './controller';
import { CommandService } from './service';

export function commandRoutes(
  fastify: FastifyInstance,
  _options: any,
  done: () => void
) {
  const commandService = new CommandService();
  const commandController = new CommandController(commandService);

  fastify.get(
    '/commands',
    async (_req, reply) => {
      const response = await commandController.getAllCommands(_req, reply);
      return response;
    }
  );

  done();
}