export interface IEventEmitter {
  on(): void
  removeEventListener(): void
  removeAllEventListeners(): void
  emit(): void
}
