export type Maybe<T> = T | null

/** Dapp of data */
export interface Dapp {
  id: number
  name: string
  url: string
  logo: string
  position: Position
}

export type Page = Dapp[]

export type Docks = Dapp[]

export type Position = {
  width: number
  height: number
  x: number
  y: number
}

export type DataNative = {
  pages: Maybe<Page[]>
  docks: Maybe<Docks>
}

export type LayoutCalculation = {
  heightStatusBar: number
  heightPagination: number
  heightDock: number
  widthDock: number
  screenCheckPoint: number
  columnNumber: number
  rowsNumber: number
  columnDockNumber: number
  sizeIcon: number
  itemWidth: number
  itemHeight: number
  outerPadding: number
  appPadding: number
  prePadding: number
  bonusHeight: number
  bonusWidth: number
  totalGrid: number
  sizeLayout: string
  prePaddingFooter: number
  dockGap: number
  itemPaddingX: number
  itemPaddingY: number
  totalPage: number
  currentPage: number
  grids: { left: number; top: number }[]
}

export enum Device {
  MOBILE = 'MOBILE',
  TABLET = 'TABLET',
  DESKTOP = 'DESKTOP'
}
export type Setting = {
  device: Device
}
