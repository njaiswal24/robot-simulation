import { Map } from '../core/types';

export class MapRepository {
  private static instance: MapRepository;
  private maps: Record<string, Map> = {};

  private constructor() {}

  public static getInstance(): MapRepository {
    if (!MapRepository.instance) {
      MapRepository.instance = new MapRepository();
    }
    return MapRepository.instance;
  }

  public createMap(name: string, width: number, height: number): Map {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }

    const map: Map = {
      id: Date.now().toString(),
      name,
      width,
      height,
      createdAt: new Date(),
    };

    this.maps[map.id] = map;
    return map;
  }

  public getMapById(id: string): Map | undefined {
    return this.maps[id];
  }

  public getAllMaps(): Map[] {
    return Object.values(this.maps);
  }

  public updateMap(id: string, updates: Partial<Omit<Map, 'id' | 'createdAt'>>): Map | undefined {
    const map = this.maps[id];
    if (!map) return undefined;

    const updatedMap = { ...map, ...updates };
    this.maps[id] = updatedMap;
    return updatedMap;
  }

  public deleteMap(id: string): boolean {
    if (!this.maps[id]) return false;
    delete this.maps[id];
    return true;
  }
}