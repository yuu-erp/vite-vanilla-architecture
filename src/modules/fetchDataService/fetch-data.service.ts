import { fulfilledPromises } from 'src/utils'
import { DataDappStrategy } from './strategies/data-dapp-strategy'
import { FavoriteAppsStrategy } from './strategies/favorite-apps-strategy'

export class FetchDataService {
  constructor(
    private readonly dataDappStrategy: DataDappStrategy,
    private readonly favoriteAppsStrategy: FavoriteAppsStrategy
  ) {
    console.log('FetchDataService dependencies initialized...')
  }

  async fetchAllData(): Promise<void> {
    try {
      await fulfilledPromises([this.dataDappStrategy.fetch(), this.favoriteAppsStrategy.fetch()])
    } catch (error) {
      console.error(error)
    }
  }

  async fetchDataDapp(): Promise<void> {
    try {
      await this.dataDappStrategy.fetch()
    } catch (error) {
      console.error(error)
    }
  }

  async fetchFavoriteApps(): Promise<void> {
    try {
      await this.favoriteAppsStrategy.fetch()
    } catch (error) {
      console.error(error)
    }
  }
}
