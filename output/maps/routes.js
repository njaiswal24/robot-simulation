"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapRoutes = mapRoutes;
const controller_1 = require("./controller");
const service_1 = require("./service");
function mapRoutes(fastify, _options, done) {
    const mapService = new service_1.MapService();
    const mapController = new controller_1.MapController(mapService);
    fastify.post('/maps', async (req, reply) => {
        const response = await mapController.createMap(req, reply);
        return response;
    });
    fastify.get('/maps/:id', async (req, reply) => {
        const response = await mapController.getMap(req, reply);
        return response;
    });
    fastify.get('/maps', async (_req, reply) => {
        const response = await mapController.getAllMaps(_req, reply);
        return response;
    });
    fastify.put('/maps/:id', async (req, reply) => {
        const response = await mapController.updateMap(req, reply);
        return response;
    });
    fastify.delete('/maps/:id', async (req, reply) => {
        const response = await mapController.deleteMap(req, reply);
        return response;
    });
    done();
}
//# sourceMappingURL=routes.js.map