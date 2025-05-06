import { FastifyInstance,FastifyRequest } from 'fastify';
import { CommandSetController } from './controller';
import { CommandSetService } from './service';
import {ExecuteCommandRequest} from './model';


export function commandSetRoutes(
  fastify: FastifyInstance,
  _options: any,
  done: () => void
) {
  const commandSetService = new CommandSetService();
  const commandSetController = new CommandSetController(commandSetService);


  fastify.post(
    '/command-sets/execute',
    async (req: FastifyRequest<{ Body: ExecuteCommandRequest }>, reply) => {
      const response = await commandSetController.executeCommand(req, reply);
      return response;
    }
  );

  done();
}