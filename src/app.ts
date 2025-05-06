import fastify, { FastifyInstance } from 'fastify';
import { mapRoutes } from './maps/routes';
import { commandRoutes } from './commands/routes';
import { commandSetRoutes } from './command-sets/routes';

export async function buildApp(): Promise<FastifyInstance> {
  const app = fastify({ logger: true });

  // Register modules
  app.register(mapRoutes, { prefix: '/api' });
  app.register(commandRoutes, { prefix: '/api' });
  app.register(commandSetRoutes, { prefix: '/api' });

  // Health check
  app.get('/health', async () => ({ status: 'ok' }));

  return app;
}