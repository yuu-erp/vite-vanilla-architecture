import { FetchDataService } from './fetch-data.service'

export class FetchDataController {
  constructor(private readonly fetchDataService: FetchDataService) {}

  async fetchAllData() {
    return await this.fetchDataService.fetchAllData()
  }

  async fetchDataDapp() {
    await this.fetchDataService.fetchDataDapp()
  }

  async fetchFavoriteApps() {
    await this.fetchDataService.fetchFavoriteApps()
  }
}
