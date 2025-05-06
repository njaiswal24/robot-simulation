"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapController = void 0;
const errors_1 = require("../core/errors");
class MapController {
    constructor(mapService) {
        this.mapService = mapService;
    }
    async createMap(req, reply) {
        try {
            const { name, width, height } = req.body;
            const map = this.mapService.createMap(name, width, height);
            return { success: true, data: map };
        }
        catch (error) {
            reply.code(400);
            return { success: false };
        }
    }
    async getMap(req, reply) {
        try {
            const { id } = req.params;
            const map = this.mapService.getMap(id);
            return { success: true, data: map };
        }
        catch (error) {
            reply.code(404);
            return { success: false };
        }
    }
    async getAllMaps(_req, reply) {
        try {
            const maps = this.mapService.getAllMaps();
            return { success: true, data: maps };
        }
        catch (error) {
            reply.code(500);
            return { success: false };
        }
    }
    async updateMap(req, reply) {
        try {
            const { id } = req.params;
            const updates = req.body;
            const map = this.mapService.updateMap(id, updates);
            return { success: true, data: map };
        }
        catch (error) {
            if (error instanceof errors_1.ResourceNotFoundError) {
                reply.code(404);
            }
            else {
                reply.code(400);
            }
            return { success: false };
        }
    }
    async deleteMap(req, reply) {
        try {
            const { id } = req.params;
            this.mapService.deleteMap(id);
            return { success: true, data: null };
        }
        catch (error) {
            reply.code(404);
            return { success: false };
        }
    }
}
exports.MapController = MapController;
//# sourceMappingURL=controller.js.map