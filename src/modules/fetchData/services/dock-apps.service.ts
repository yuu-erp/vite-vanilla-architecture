import { StorageService } from 'src/services/storage.service'
import { FetchRepository } from '../interfaces/fetch-data.interface'
import { DataNative } from 'src/types/data'
import { SystemCoreService } from 'src/services/system-core.service'

export class FetchDockAppsService implements FetchRepository {
  constructor(
    private readonly systemCoreService: SystemCoreService,
    private readonly storageService: StorageService<DataNative>
  ) {}
  async fetch() {
    this.storageService.set('docks', [])
  }
}
