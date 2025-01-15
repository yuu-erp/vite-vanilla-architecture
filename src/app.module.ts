import { FetchDataModule } from './modules/fetchData/fetch-data.module'
import { LayoutCalculationModule } from './modules/layoutCalculation/layout-calculation.module'
import { StorageService } from './services/storage.service'
import { SystemCoreService } from './services/system-core.service'
import { DataNative, LayoutCalculation, Setting } from './types/data'

export class AppModule {
  private systemCoreService: SystemCoreService

  private storageServiceLayoutCalculation: StorageService<LayoutCalculation>
  private storageServiceDataNative: StorageService<DataNative>

  private fetchDataModule: FetchDataModule

  constructor() {
    console.time('Time run application')
    console.log('AppModule dependencies initialized...')
    this.systemCoreService = SystemCoreService.getInstance()

    this.storageServiceLayoutCalculation = StorageService.getInstance<LayoutCalculation>('layoutCalculation')
    this.storageServiceDataNative = StorageService.getInstance<DataNative>('dataNative')
    const layoutCalculationModule = new LayoutCalculationModule(this.storageServiceLayoutCalculation)
    layoutCalculationModule.init()
    this.fetchDataModule = new FetchDataModule(
      this.systemCoreService,
      this.storageServiceDataNative,
      layoutCalculationModule
    )
    console.timeEnd('Time run application')
  }

  async init() {
    try {
      console.log('Application initialized successfully.')
    } catch (error) {
      console.error(error)
    }
  }
}
