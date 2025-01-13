import { Dapp, Page } from 'src/types/data'
import { Device } from 'src/types/utils'

export interface DataNative {
  pages: Page[]
  favoriteApps: Dapp[]
}

export interface LayoutCalculation {
  heightStatusBar: number
  heightPagination: number
  heightDock: number
  widthDock: number
  screenCheckPoint: number
  device: Device
}

export interface AppConfig {}
