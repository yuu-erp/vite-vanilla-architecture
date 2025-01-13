import { DataNative } from 'src/interface/app-config.interface'
import { StorageService } from '../storageService/storage.service'
import { FetchDataController } from './fetch-data.controller'
import { FetchDataService } from './fetch-data.service'
import { DataDappStrategy } from './strategies/data-dapp-strategy'
import { FavoriteAppsStrategy } from './strategies/favorite-apps-strategy'

// Khởi tạo các dependencies và controller
export class FetchDataModule {
  private fetchDataService: FetchDataService
  private fetchDataController: FetchDataController

  constructor(private readonly storageService: StorageService<DataNative>) {
    // Khởi tạo các service
    const dataDappStrategy = new DataDappStrategy(this.storageService)
    const favoriteAppsStrategy = new FavoriteAppsStrategy(this.storageService)

    // Khởi tạo FetchDataService với các service
    this.fetchDataService = new FetchDataService(dataDappStrategy, favoriteAppsStrategy)

    // Khởi tạo controller với FetchDataService
    this.fetchDataController = new FetchDataController(this.fetchDataService)

    console.log('FetchDataModule initialized with dependencies...')
  }

  // Phương thức truy cập controller để gọi fetch
  async fetchAllData() {
    await this.fetchDataController.fetchAllData()
  }

  async fetchDataDapp() {
    await this.fetchDataController.fetchDataDapp()
  }

  async fetchFavoriteApps() {
    await this.fetchDataController.fetchFavoriteApps()
  }
}
