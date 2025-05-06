"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapRepository = void 0;
class MapRepository {
    constructor() {
        this.maps = {};
    }
    static getInstance() {
        if (!MapRepository.instance) {
            MapRepository.instance = new MapRepository();
        }
        return MapRepository.instance;
    }
    createMap(name, width, height) {
        if (width <= 0 || height <= 0) {
            throw new Error('Width and height must be positive numbers');
        }
        const map = {
            id: Date.now().toString(),
            name,
            width,
            height,
            createdAt: new Date(),
        };
        this.maps[map.id] = map;
        return map;
    }
    getMapById(id) {
        return this.maps[id];
    }
    getAllMaps() {
        return Object.values(this.maps);
    }
    updateMap(id, updates) {
        const map = this.maps[id];
        if (!map)
            return undefined;
        const updatedMap = Object.assign(Object.assign({}, map), updates);
        this.maps[id] = updatedMap;
        return updatedMap;
    }
    deleteMap(id) {
        if (!this.maps[id])
            return false;
        delete this.maps[id];
        return true;
    }
}
exports.MapRepository = MapRepository;
//# sourceMappingURL=model.js.map