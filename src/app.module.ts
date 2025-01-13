import { DataNative, LayoutCalculation } from 'src/interface/app-config.interface'
import { FetchDataModule } from 'src/modules/fetchDataService/fetch-data.module'
import { StorageService } from 'src/modules/storageService/storage.service'
import { LayoutCalculationService } from './services/layout-calculation.service'

export class AppModule {
  private storageServiceLayoutCalculation: StorageService<LayoutCalculation>
  private storageServiceDataNative: StorageService<DataNative>
  constructor() {
    console.time('Time run application')
    console.log('AppModule dependencies initialized...')
    this.Imports()
    console.timeEnd('Time run application')
  }

  private Imports() {
    this.storageServiceLayoutCalculation = StorageService.getInstance('map', 'layoutCalculation')
    this.storageServiceDataNative = StorageService.getInstance('map', 'dataNative')
    const layoutCalculationService = new LayoutCalculationService(this.storageServiceLayoutCalculation)
    const fetchDataModule = new FetchDataModule(this.storageServiceDataNative)
    layoutCalculationService.init()
    fetchDataModule.fetchAllData()
  }

  init() {
    console.log('Application initialized successfully.')
  }
}
