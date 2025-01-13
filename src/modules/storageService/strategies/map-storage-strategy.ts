import { StorageStrategy } from '../interfaces/storage-strategy.interface'

export class MapStorageStrategy<T> implements StorageStrategy<T> {
  private storage = new Map<keyof T, T[keyof T]>()

  set<K extends keyof T>(key: K, value: T[K]): void {
    this.storage.set(key, value)
  }

  get<K extends keyof T>(key: K): T[keyof T] | null {
    const value = this.storage.get(key)
    return value !== undefined ? value : null
  }

  remove<K extends keyof T>(key: K): void {
    this.storage.delete(key)
  }

  clear(): void {
    this.storage.clear()
  }

  getAll(): Partial<T> {
    const result: Partial<T> = {}
    this.storage.forEach((value, key) => {
      result[key] = value
    })
    return result
  }

  setAll(value: Partial<T>): void {
    Object.entries(value).forEach(([key, val]) => {
      this.storage.set(key as keyof T, val as T[keyof T])
    })
  }

  hasKey<K extends keyof T>(key: K): boolean {
    return this.storage.has(key)
  }
}
