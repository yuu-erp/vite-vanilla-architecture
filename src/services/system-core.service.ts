import { EventEmitter } from 'src/events/event-emitter'
import { IEventEmitter } from 'src/interface/event-emitter.interface'
import { IdGenerator } from 'src/interface/id-generator.interface'
export class SystemCoreService {
  private static instance: SystemCoreService
  // Thay vì khởi tạo các dependencies trong constructor, chúng sẽ được truyền vào khi gọi getInstance()
  private constructor(
    private readonly eventEmitter: IEventEmitter,
    private readonly idGenerator: IdGenerator
  ) {
    console.log('SystemCoreService dependencies initialized...')
  }
  // Sử dụng getInstance với các tham số cần thiết
  public static getInstance(eventEmitter: EventEmitter, idGenerator: IdGenerator): SystemCoreService {
    if (!SystemCoreService.instance) {
      // Chỉ khởi tạo khi chưa có instance
      SystemCoreService.instance = new SystemCoreService(eventEmitter, idGenerator)
    }
    return SystemCoreService.instance
  }
}
