import { IStorageService } from 'src/interface/storage.interface'

export class StorageService<T> implements IStorageService<T> {
  private static instances: Map<string, StorageService<any>> = new Map()
  private storage = new Map<keyof T, T[keyof T]>()
  private constructor(private readonly key: string) {
    console.log('StorageService dependencies initialized...' + ' ' + key)
  }

  public static getInstance<T>(key: string): StorageService<T> {
    const instanceKey = `${key}`

    if (!this.instances.has(instanceKey)) {
      this.instances.set(instanceKey, new StorageService<T>(key))
    }

    return this.instances.get(instanceKey) as StorageService<T>
  }

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
