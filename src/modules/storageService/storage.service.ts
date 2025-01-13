import { StorageStrategyFactory } from './factories/storage-strategy.factory'
import { StorageStrategy } from './interfaces/storage-strategy.interface'

export class StorageService<T> {
  private static instances: Map<string, StorageService<any>> = new Map() // Lưu trữ các instance theo chiến lược và key

  private storageStrategy: StorageStrategy<T>

  private constructor(strategyType: 'map' | 'local', key: string) {
    console.log(`StorageService initialized with strategy: ${strategyType}, key: ${key}`)
    this.storageStrategy = StorageStrategyFactory.getStorageStrategy<T>(strategyType)
  }

  // Hàm getInstance nhận thêm 'key' để tạo instance duy nhất cho cặp strategy và key
  public static getInstance<T>(strategyType: 'map' | 'local', key: string): StorageService<T> {
    const instanceKey = `${strategyType}_${key}` // Tạo key duy nhất từ strategy và key

    if (!this.instances.has(instanceKey)) {
      this.instances.set(instanceKey, new StorageService<T>(strategyType, key))
    }

    return this.instances.get(instanceKey) as StorageService<T>
  }

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.storageStrategy.set(key, value)
  }

  get<K extends keyof T>(key: K): T[keyof T] | null {
    return this.storageStrategy.get(key)
  }

  remove<K extends keyof T>(key: K): void {
    this.storageStrategy.remove(key)
  }

  clear(): void {
    this.storageStrategy.clear()
  }

  getAll(): Partial<T> {
    return this.storageStrategy.getAll()
  }

  setAll(value: Partial<T>): void {
    return this.storageStrategy.setAll(value)
  }

  hasKey<K extends keyof T>(key: K): boolean {
    return this.storageStrategy.hasKey(key)
  }
}
