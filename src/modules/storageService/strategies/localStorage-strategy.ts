import { StorageStrategy } from '../interfaces/storage-strategy.interface'

export class LocalStorageStrategy<T> implements StorageStrategy<T> {
  // Lấy dữ liệu từ localStorage và phân tích JSON
  private getFromLocalStorage<K extends keyof T>(key: K): T[K] | null {
    const value = localStorage.getItem(key as string)
    return value ? JSON.parse(value) : null
  }

  // Lưu trữ dữ liệu vào localStorage dưới dạng JSON
  private setToLocalStorage<K extends keyof T>(key: K, value: T[K]): void {
    localStorage.setItem(key as string, JSON.stringify(value))
  }

  // Xóa một mục khỏi localStorage
  private removeFromLocalStorage<K extends keyof T>(key: K): void {
    localStorage.removeItem(key as string)
  }

  // Xóa tất cả dữ liệu trong localStorage
  private clearLocalStorage(): void {
    localStorage.clear()
  }

  // Lấy tất cả dữ liệu từ localStorage
  private getAllFromLocalStorage(): { [key: string]: any } {
    const allItems: { [key: string]: any } = {}
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) as string
      allItems[key] = JSON.parse(localStorage.getItem(key) as string)
    }
    return allItems
  }

  // Set một mục vào localStorage
  set<K extends keyof T>(key: K, value: T[K]): void {
    this.setToLocalStorage(key, value)
  }

  // Lấy một mục từ localStorage
  get<K extends keyof T>(key: K): T[K] | null {
    return this.getFromLocalStorage(key)
  }

  // Xóa một mục khỏi localStorage
  remove<K extends keyof T>(key: K): void {
    this.removeFromLocalStorage(key)
  }

  // Xóa tất cả dữ liệu trong localStorage
  clear(): void {
    this.clearLocalStorage()
  }

  // Lấy tất cả các mục từ localStorage
  getAll(): Partial<T> {
    const allItems = this.getAllFromLocalStorage()
    const result: Partial<T> = {}
    for (const key in allItems) {
      if (Object.prototype.hasOwnProperty.call(allItems, key)) {
        result[key as keyof T] = allItems[key]
      }
    }
    return result
  }

  // Set tất cả dữ liệu vào localStorage
  setAll(value: Partial<T>): void {
    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        this.setToLocalStorage(key as keyof T, value[key])
      }
    }
  }

  // Kiểm tra xem một key có tồn tại trong localStorage không
  hasKey<K extends keyof T>(key: K): boolean {
    return localStorage.getItem(key as string) !== null
  }
}
