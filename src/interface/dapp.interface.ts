export interface Position {
  width: number
  height: number
  x: number
  y: number
}

export interface Dapp {
  id: number
  name: string
  page: number
  type: number
  position: Position
  isVisibleOnHome: number
  logo: string
  bundleId: any
  isFavorite: number
  isDefault: number
}
