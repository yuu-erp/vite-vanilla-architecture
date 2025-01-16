import { UniqueEntityID } from '../entities/unique-entity'

export interface RepositoryBase<Entity> {
  save(entity: Entity): Promise<Entity>
  findById(id: UniqueEntityID): Promise<Entity | null>
  findAll(): Promise<Entity[]>
  delete(id: UniqueEntityID): Promise<void>
}
