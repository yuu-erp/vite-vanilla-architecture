import { IOCContainer } from 'src/core/infrastructure/ioc/ioc-container'
export abstract class Module {
  IocContainer: IOCContainer
  constructor() {
    this.IocContainer = new IOCContainer() // Khởi tạo IocContainer tại đây
  }
  abstract configureDependencies(): void
}
