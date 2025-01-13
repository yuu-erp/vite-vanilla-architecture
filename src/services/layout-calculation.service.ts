import { LayoutCalculation } from 'src/interface/app-config.interface'
import { StorageService } from 'src/modules/storageService/storage.service'

export class LayoutCalculationService {
  constructor(private readonly storageService: StorageService<LayoutCalculation>) {
    console.log('LayoutCalculationService dependencies initialized...')
  }
  init() {
    this.storageService.setAll({
      heightStatusBar: 100
    })
    console.log('storageService', this.storageService.getAll())
  }
}
