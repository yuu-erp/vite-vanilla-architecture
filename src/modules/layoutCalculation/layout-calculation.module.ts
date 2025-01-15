import { StorageService } from 'src/services/storage.service'
import { LayoutCalculation } from 'src/types/data'
import { LayoutCalculationService } from './layout-calculation.service'

export class LayoutCalculationModule {
  private layoutCalculationService: LayoutCalculationService
  constructor(private readonly storageService: StorageService<LayoutCalculation>) {
    this.layoutCalculationService = new LayoutCalculationService(this.storageService)
  }

  init() {
    this.layoutCalculationService.init()
  }
}
