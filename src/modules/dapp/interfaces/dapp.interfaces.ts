import { DappEntities } from '../entities/dapp.entities'

export interface DappInterface {
  getDappByID: (id: number) => DappEntities | null
  getAllDapps: () => DappEntities[]
  addDapp: (dapp: DappEntities) => boolean
  updateDapp: (id: number, updatedData: Partial<DappEntities>) => boolean
  removeDapp: (id: number) => boolean
  exists: (id: number) => boolean
  clearAllDapps: () => void
  save: (data: DappEntities) => void
}
