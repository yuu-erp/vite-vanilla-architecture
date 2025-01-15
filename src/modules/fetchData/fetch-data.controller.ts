import { fulfilledPromises } from 'src/utils'
import { FetchDataDappService } from './services/data-dapp.service'
import { FetchDockAppsService } from './services/dock-apps.service'

export class FetchDataController {
  constructor(
    private readonly fetchDataDappService: FetchDataDappService,
    private readonly fetchDockAppsService: FetchDockAppsService
  ) {
    console.log('FetchDataService dependencies initialized...')
  }

  async fetchAllData(): Promise<void> {
    try {
      await fulfilledPromises([this.fetchDataDappService.fetch(), this.fetchDockAppsService.fetch()])
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDataDapp(): Promise<void> {
    try {
      await this.fetchDataDappService.fetch()
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDockApps(): Promise<void> {
    try {
      await this.fetchDockAppsService.fetch()
    } catch (error) {
      console.error(error)
    }
  }
}
