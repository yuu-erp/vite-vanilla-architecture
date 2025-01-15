import { IEventEmitter } from 'src/interface/event-emitter.interface'
import { receiveData } from 'src/types/receiveData'

type EventNames = keyof typeof receiveData

// Định nghĩa kiểu cho callback (listener)
type Listener<T = any> = (...args: T[]) => void

export class EventEmitter implements IEventEmitter {
  private listeners: Map<EventNames, Listener[]> = new Map()
  constructor() {}
  on(): void {
    throw new Error('Method not implemented.')
  }
  removeEventListener(): void {
    throw new Error('Method not implemented.')
  }
  removeAllEventListeners(): void {
    throw new Error('Method not implemented.')
  }
  emit(): void {
    throw new Error('Method not implemented.')
  }
}
