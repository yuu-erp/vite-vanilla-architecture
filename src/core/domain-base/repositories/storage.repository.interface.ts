export interface IStorageRepository<T> {
  set<K extends keyof T>(key: K, value: T[K]): void
  get<K extends keyof T>(key: K): T[keyof T] | null
  remove<K extends keyof T>(key: K): void
  clear(): void
  getAll(): Partial<T>
  setAll(value: Partial<T>): void
  hasKey<K extends keyof T>(key: K): boolean
}
