import { DataNative } from 'src/interface/app-config.interface'
import { StorageService } from 'src/services/storageService/storage.service'
import { FetchDataStratery } from '../interfaces/fetch-data-stratery.interface'

export class DataDappStrategy implements FetchDataStratery {
  constructor(private readonly storageService: StorageService<DataNative>) {}
  async fetch() {
    this.storageService.set('pages', [])
  }
}
