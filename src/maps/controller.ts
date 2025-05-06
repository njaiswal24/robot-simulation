import { FastifyRequest, FastifyReply } from 'fastify';
import { MapService } from './service';
import { ApiResponse, Map } from '../core/types';
import { ResourceNotFoundError } from '../core/errors';

export class MapController {
  constructor(private mapService: MapService) {}

  async createMap(
    req: FastifyRequest<{ Body: Omit<Map, 'id' | 'createdAt'> }>,
    reply: FastifyReply
  ): Promise<ApiResponse<Map>> {
    try {
      const { name, width, height } = req.body;
      const map = this.mapService.createMap(name, width, height);
      return { success: true, data: map };
    } catch (error) {
      reply.code(400);
      return { success: false};
    }
  }

  async getMap(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ): Promise<ApiResponse<Map>> {
    try {
      const { id } = req.params;
      const map = this.mapService.getMap(id);
      return { success: true, data: map };
    } catch (error) {
      reply.code(404);
      return { success: false };
    }
  }

  async getAllMaps(
    _req: FastifyRequest,
    reply: FastifyReply
  ): Promise<ApiResponse<Map[]>> {
    try {
      const maps = this.mapService.getAllMaps();
      return { success: true, data: maps };
    } catch (error) {
      reply.code(500);
      return { success: false };
    }
  }

  async updateMap(
    req: FastifyRequest<{
      Params: { id: string };
      Body: Partial<Omit<Map, 'id' | 'createdAt'>>;
    }>,
    reply: FastifyReply
  ): Promise<ApiResponse<Map>> {
    try {
      const { id } = req.params;
      const updates = req.body;
      const map = this.mapService.updateMap(id, updates);
      return { success: true, data: map };
    } catch (error) {
      if (error instanceof ResourceNotFoundError) {
        reply.code(404);
      } else {
        reply.code(400);
      }
      return { success: false };
    }
  }

  async deleteMap(
    req: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ): Promise<ApiResponse<null>> {
    try {
      const { id } = req.params;
      this.mapService.deleteMap(id);
      return { success: true, data: null };
    } catch (error) {
      reply.code(404);
      return { success: false};
    }
  }
}