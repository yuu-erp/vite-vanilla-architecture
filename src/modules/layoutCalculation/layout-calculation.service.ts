import { StorageService } from 'src/services/storage.service'
import { LayoutCalculation } from 'src/types/data'
import { LayoutCalculationRepository } from './interface/layout-calculation.interface'
import { useResponsiveValue } from 'src/utils'
import {
  CHECKPOINT_COLUMN,
  CHECKPOINT_COLUMN_DOCK,
  CHECKPOINT_HEIGHT_STATUS_BAR,
  HEIGHT_PAGINATION
} from 'src/constants'

export class LayoutCalculationService implements LayoutCalculationRepository {
  constructor(private readonly storageService: StorageService<LayoutCalculation>) {
    console.log('LayoutCalculationService dependencies initialized...')
  }
  getHeightDock(): number {
    throw new Error('Method not implemented.')
  }

  getScreenCheckPoint(): number {
    throw new Error('Method not implemented.')
  }
  getHeightStatusBar(): number {
    return useResponsiveValue(CHECKPOINT_HEIGHT_STATUS_BAR, 60)
  }
  getHeightPagination(): number {
    return HEIGHT_PAGINATION
  }
  getColumnNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN, 4)
  }
  getColumnDockNumber(): number {
    return useResponsiveValue(CHECKPOINT_COLUMN_DOCK, 4)
  }
  getItemWidth(): number {
    throw new Error('Method not implemented.')
  }

  init() {
    this.storageService.setAll({
      heightStatusBar: this.getHeightStatusBar(),
      heightPagination: this.getHeightPagination(),
      heightDock: this.getHeightDock()
    })

    console.log('LayoutCalculationService', this.storageService.getAll())
  }
}
