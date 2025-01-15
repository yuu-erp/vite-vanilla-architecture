import { DappInterface } from '../interfaces/dapp.interfaces'
import { DappEntities } from '../entities/dapp.entities'
import { StorageService } from 'src/services/storage.service'

export class DataDappService implements DappInterface {
  constructor(private readonly storageService: StorageService<any>) {}
  getDappByID: (id: number) => DappEntities | null
  getAllDapps: () => DappEntities[]
  addDapp: (dapp: DappEntities) => boolean
  updateDapp: (id: number, updatedData: Partial<DappEntities>) => boolean
  removeDapp: (id: number) => boolean
  exists: (id: number) => boolean
  clearAllDapps: () => void
  save: (data: DappEntities) => void
}
