// src/services/storage/storage-strategy.factory.ts
import { StorageStrategy } from '../interfaces/storage-strategy.interface'
import { LocalStorageStrategy } from '../strategies/localStorage-strategy'
import { MapStorageStrategy } from '../strategies/map-storage-strategy'

export class StorageStrategyFactory {
  static getStorageStrategy<T>(strategyType: 'map' | 'local'): StorageStrategy<T> {
    switch (strategyType) {
      case 'map':
        return new MapStorageStrategy<T>()
      case 'local':
        return new LocalStorageStrategy<T>()
      default:
        throw new Error('Unsupported storage strategy')
    }
  }
}
