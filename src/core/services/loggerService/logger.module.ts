import { Container } from 'inversify'
import { IModule } from 'src/core/infrastructure/ioc/IModule'
import { LoggerService } from './logger.service'

export class LoggerModule implements IModule {
  container: Container
  constructor() {
    this.container = new Container()
    this.registerServices()
  }

  private registerServices(): void {
    this.container.bind(LoggerService).toSelf().inSingletonScope() // Singleton để chỉ có một instance
  }

  // Cung cấp container từ UserModule
  public getContainer(): Container {
    return this.container
  }
}
