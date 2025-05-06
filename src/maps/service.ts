import { ResourceNotFoundError, ValidationError } from '../core/errors';
import {Map} from '../core/types'
import { MapRepository } from './model';

export class MapService {
  private repository = MapRepository.getInstance();

  public createMap(name: string, width: number, height: number): Map {
    if (!name || !width || !height) {
      throw new ValidationError('Name, width, and height are required');
    }

    if (typeof width !== 'number' || typeof height !== 'number') {
      throw new ValidationError('Width and height must be numbers');
    }

    if (width <= 0 || height <= 0) {
      throw new ValidationError('Width and height must be positive numbers');
    }

    return this.repository.createMap(name, width, height);
  }

  public getMap(id: string): Map {
    const map = this.repository.getMapById(id);
    if (!map) {
      throw new ResourceNotFoundError('Map', id);
    }
    return map;
  }

  public getAllMaps(): Map[] {
    return this.repository.getAllMaps();
  }

  public updateMap(id: string, updates: Partial<Omit<Map, 'id' | 'createdAt'>>): Map {
    if (updates.width && (typeof updates.width !== 'number' || updates.width <= 0)) {
      throw new ValidationError('Width must be a positive number');
    }

    if (updates.height && (typeof updates.height !== 'number' || updates.height <= 0)) {
      throw new ValidationError('Height must be a positive number');
    }

    const map = this.repository.updateMap(id, updates);
    if (!map) {
      throw new ResourceNotFoundError('Map', id);
    }
    return map;
  }

  public deleteMap(id: string): void {
    const success = this.repository.deleteMap(id);
    if (!success) {
      throw new ResourceNotFoundError('Map', id);
    }
  }
}