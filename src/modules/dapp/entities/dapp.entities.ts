import { Position } from 'src/types/data'

export class DappEntities {
  constructor(
    public readonly id: number,
    public readonly bundleId: string,
    public readonly isDefault: number,
    public type: number,
    public name: string,
    public logo: string,
    public page: number,
    public position: Position,
    public isFavorite: number,
    public isVisibleOnHome: number
  ) {}
}
