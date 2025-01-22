import { LoggerModule } from './core/services/loggerService/logger.module'
import { LoggerService } from './core/services/loggerService/logger.service'

export class AppModule {
  private loggerModule: LoggerModule

  constructor() {
    console.time('Time run application')
    console.log('AppModule dependencies initialized...')

    // Khởi tạo loggerModule trong constructor
    this.loggerModule = new LoggerModule()

    this.setupModules()
    console.timeEnd('Time run application')
  }

  public setupModules(): void {
    // Tại đây bạn có thể load các module khác hoặc sử dụng loggerModule
    const loggerService = this.loggerModule.getContainer().get(LoggerService)
    console.log('LoggerService instance:', loggerService)
    loggerService.log('xin chào')
  }

  public async init(): Promise<void> {
    try {
      console.log('Application initialized successfully.')
    } catch (error) {
      console.error(error)
    }
  }
}
