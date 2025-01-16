import { Module } from './core/domain-base/repositories/module.repository'
export class AppModule extends Module {
  constructor() {
    super()
    console.time('Time run application')
    console.log('AppModule dependencies initialized...')
    this.configureDependencies()
    console.timeEnd('Time run application')
  }

  // Đổi phạm vi của configureDependencies thành public
  public configureDependencies(): void {
    // Đăng ký MapStorageService
  }

  // Phương thức khởi tạo ứng dụng
  public async init(): Promise<void> {
    try {
      console.log('Application initialized successfully.')
    } catch (error) {}
  }
}
