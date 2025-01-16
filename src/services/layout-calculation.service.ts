import { ILayoutCalculationRepository } from 'src/core/domain-base/repositories/layout-calculation.repository.interface'
import { IStorageRepository } from 'src/core/domain-base/repositories/storage.repository.interface'

export class LayoutCalculationService implements ILayoutCalculationRepository {
  constructor(private readonly storageService: IStorageRepository<any>) {}
}
