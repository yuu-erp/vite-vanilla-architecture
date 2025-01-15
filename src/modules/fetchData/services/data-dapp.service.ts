import { StorageService } from 'src/services/storage.service'
import { FetchRepository } from '../interfaces/fetch-data.interface'
import { DataNative } from 'src/types/data'
import { SystemCoreService } from 'src/services/system-core.service'
import { LayoutCalculationModule } from 'src/modules/layoutCalculation/layout-calculation.module'

export class FetchDataDappService implements FetchRepository {
  constructor(
    private readonly systemCoreService: SystemCoreService,
    private readonly storageService: StorageService<DataNative>,
    private readonly layoutCalculationModule: LayoutCalculationModule
  ) {}
  async fetch() {
    this.storageService.set('pages', [[]])
  }
}
