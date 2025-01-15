import { UniqueEntityID } from './unique-entity'

export abstract class Entity {
  private id: UniqueEntityID

  constructor(id: UniqueEntityID) {
    this.id = id
  }

  // Getter để truy cập id
  getId(): UniqueEntityID {
    return this.id
  }

  abstract validate(): void
}
