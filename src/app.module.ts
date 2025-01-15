import { IOCContainer } from './ioc-container' // Giả sử bạn đã có IOCContainer

// Đây là class quản lý các module
export class AppModule {
  private container: IOCContainer

  constructor() {
    this.container = new IOCContainer()
    this.configureDependencies()
  }

  // Phương thức đăng ký các phụ thuộc vào container
  private configureDependencies(): void {
    // Đăng ký dịch vụ UserService dưới dạng singleton
  }

  // Phương thức khởi tạo ứng dụng
  public init(): void {
    // Giải quyết các dịch vụ khi cần
  }
}
