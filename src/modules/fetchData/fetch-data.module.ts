import { StorageService } from 'src/services/storage.service'
import { DataNative } from 'src/types/data'
import { FetchDataController } from './fetch-data.controller'
import { FetchDockAppsService } from './services/dock-apps.service'
import { FetchDataDappService } from './services/data-dapp.service'
import { SystemCoreService } from 'src/services/system-core.service'
import { LayoutCalculationModule } from '../layoutCalculation/layout-calculation.module'

// Khởi tạo các dependencies
export class FetchDataModule {
  private fetchDataController: FetchDataController

  constructor(
    private readonly systemCoreService: SystemCoreService,
    private readonly storageService: StorageService<DataNative>,
    private readonly layoutCalculationModule: LayoutCalculationModule
  ) {
    // Khởi tạo các service
    const fetchDataDappService = new FetchDataDappService(
      this.systemCoreService,
      this.storageService,
      this.layoutCalculationModule
    )
    const fetchDockAppsService = new FetchDockAppsService(this.systemCoreService, this.storageService)
    // Khởi tạo FetchDataService với các service
    this.fetchDataController = new FetchDataController(fetchDataDappService, fetchDockAppsService)
    console.log('FetchDataModule initialized with dependencies...')
  }

  // Phương thức truy cập controller để gọi fetch
  async fetchAllData() {
    await this.fetchDataController.fetchAllData()
  }

  async fetchDataDapp() {
    await this.fetchDataController.fetchDataDapp()
  }

  async fetchDockApps() {
    await this.fetchDataController.fetchDockApps()
  }
}
