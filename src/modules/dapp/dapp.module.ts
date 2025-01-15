import { StorageService } from 'src/services/storage.service'
import { DappController } from './dapp.controller'
import { DappEntities } from './entities/dapp.entities'
import { DataDappService } from './services/data-dapp.service'
import { DockDappService } from './services/dock-dapp.service'

export class DappModule {
  private dappController: DappController
  constructor(private readonly storageService: StorageService<any>) {
    const dataDappService = new DataDappService(this.storageService)
    const dockDappService = new DockDappService(this.storageService)
    this.dappController = new DappController(dataDappService, dockDappService)
  }
  getDataDappByID(id: number): DappEntities {
    return this.dappController.getDataDappByID(id)
  }
  getAllDataDapps(): DappEntities[] {
    return this.dappController.getAllDataDapps()
  }
  addDataDapp(dapp: DappEntities): boolean {
    return this.dappController.addDataDapp(dapp)
  }
  updateDataDapp(id: number, updatedData: Partial<DappEntities>) {
    return this.dappController.updateDataDapp(id, updatedData)
  }
  removeDataDapp(id: number): boolean {
    return this.dappController.removeDataDapp(id)
  }
  existsDataDapp(id: number): boolean {
    return this.dappController.existsDataDapp(id)
  }
  clearAllDappDapps(): void {
    return this.dappController.clearAllDappDapps()
  }

  /* 
      Methods for managing dock dapps
    */
  getDockDappByID(id: number): DappEntities {
    return this.dappController.getDockDappByID(id)
  }
  getAllDockDapps(): DappEntities[] {
    return this.dappController.getAllDockDapps()
  }
  addDockDapp(dapp: DappEntities): boolean {
    return this.dappController.addDockDapp(dapp)
  }
  updateDockDapp(id: number, updatedData: Partial<DappEntities>) {
    return this.dappController.updateDockDapp(id, updatedData)
  }
  removeDockDapp(id: number): boolean {
    return this.dappController.removeDockDapp(id)
  }
  existsDockDapp(id: number): boolean {
    return this.dappController.existsDockDapp(id)
  }
  clearAllDockDapps(): void {
    return this.dappController.clearAllDockDapps()
  }
}
