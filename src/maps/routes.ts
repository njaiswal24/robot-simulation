import { FastifyInstance } from 'fastify';
import { MapController } from './controller';
import { MapService } from './service';
import { ApiResponse, Map } from '../core/types';
import { FastifyRequest, FastifyReply } from 'fastify';

export function mapRoutes(
  fastify: FastifyInstance,
  _options: any,
  done: () => void
) {
  const mapService = new MapService();
  const mapController = new MapController(mapService);

  fastify.post(
    '/maps',
    async (req:  FastifyRequest<{ Body: Omit<Map, 'id' | 'createdAt'> }>, reply) => {
      const response = await mapController.createMap(req, reply);
      return response;
    }
  );

  fastify.get(
    '/maps/:id',
    async (req: FastifyRequest<{ Params: { id: string } }>, reply) => {
      const response = await mapController.getMap(req, reply);
      return response;
    }
  );

  fastify.get(
    '/maps',
    async (_req , reply) => {
      const response = await mapController.getAllMaps(_req, reply);
      return response;
    }
  );

  fastify.put(
    '/maps/:id',
    async (req: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Map, 'id' | 'createdAt'>>;
    }>, reply) => {
      const response = await mapController.updateMap(req, reply);
      return response;
    }
  );

  fastify.delete(
    '/maps/:id',
    async (req: FastifyRequest<{ Params: { id: string } }>, reply) => {
      const response = await mapController.deleteMap(req, reply);
      return response;
    }
  );

  done();
}