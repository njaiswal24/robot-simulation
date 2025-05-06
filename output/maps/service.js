"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapService = void 0;
const errors_1 = require("../core/errors");
const model_1 = require("./model");
class MapService {
    constructor() {
        this.repository = model_1.MapRepository.getInstance();
    }
    createMap(name, width, height) {
        if (!name || !width || !height) {
            throw new errors_1.ValidationError('Name, width, and height are required');
        }
        if (typeof width !== 'number' || typeof height !== 'number') {
            throw new errors_1.ValidationError('Width and height must be numbers');
        }
        if (width <= 0 || height <= 0) {
            throw new errors_1.ValidationError('Width and height must be positive numbers');
        }
        return this.repository.createMap(name, width, height);
    }
    getMap(id) {
        const map = this.repository.getMapById(id);
        if (!map) {
            throw new errors_1.ResourceNotFoundError('Map', id);
        }
        return map;
    }
    getAllMaps() {
        return this.repository.getAllMaps();
    }
    updateMap(id, updates) {
        if (updates.width && (typeof updates.width !== 'number' || updates.width <= 0)) {
            throw new errors_1.ValidationError('Width must be a positive number');
        }
        if (updates.height && (typeof updates.height !== 'number' || updates.height <= 0)) {
            throw new errors_1.ValidationError('Height must be a positive number');
        }
        const map = this.repository.updateMap(id, updates);
        if (!map) {
            throw new errors_1.ResourceNotFoundError('Map', id);
        }
        return map;
    }
    deleteMap(id) {
        const success = this.repository.deleteMap(id);
        if (!success) {
            throw new errors_1.ResourceNotFoundError('Map', id);
        }
    }
}
exports.MapService = MapService;
//# sourceMappingURL=service.js.map