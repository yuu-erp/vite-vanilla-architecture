import { DappEntities } from './entities/dapp.entities'
import { DataDappService } from './services/data-dapp.service'
import { DockDappService } from './services/dock-dapp.service'

export class DappController {
  constructor(
    private readonly dataDappService: DataDappService,
    private readonly dockDappService: DockDappService
  ) {}

  /* 
    Methods for managing data dapps
  */
  getDataDappByID(id: number): DappEntities {
    return this.dataDappService.getDappByID(id)
  }
  getAllDataDapps(): DappEntities[] {
    return this.dataDappService.getAllDapps()
  }
  addDataDapp(dapp: DappEntities): boolean {
    return this.dataDappService.addDapp(dapp)
  }
  updateDataDapp(id: number, updatedData: Partial<DappEntities>) {
    return this.dataDappService.updateDapp(id, updatedData)
  }
  removeDataDapp(id: number): boolean {
    return this.dataDappService.removeDapp(id)
  }
  existsDataDapp(id: number): boolean {
    return this.dataDappService.exists(id)
  }
  clearAllDappDapps(): void {
    return this.dataDappService.clearAllDapps()
  }

  /* 
    Methods for managing dock dapps
  */
  getDockDappByID(id: number): DappEntities {
    return this.dockDappService.getDappByID(id)
  }
  getAllDockDapps(): DappEntities[] {
    return this.dockDappService.getAllDapps()
  }
  addDockDapp(dapp: DappEntities): boolean {
    return this.dockDappService.addDapp(dapp)
  }
  updateDockDapp(id: number, updatedData: Partial<DappEntities>) {
    return this.dockDappService.updateDapp(id, updatedData)
  }
  removeDockDapp(id: number): boolean {
    return this.dockDappService.removeDapp(id)
  }
  existsDockDapp(id: number): boolean {
    return this.dockDappService.exists(id)
  }
  clearAllDockDapps(): void {
    return this.dockDappService.clearAllDapps()
  }
}
