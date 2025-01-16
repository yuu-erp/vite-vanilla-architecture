import { UniqueEntityID } from 'src/core/domain-base/entities/unique-entity'
import { DappEntity } from '../entities/dapp.entity'
import { IDappRepository } from './dapp.repository.interface'

// Ví dụ Repository đơn giản lưu trữ dữ liệu trong bộ nhớ
export class DappRepository implements IDappRepository {
  constructor() {}
  findById(id: UniqueEntityID): Promise<DappEntity | null> {
    throw new Error('Method not implemented.')
  }
  save(dapp: DappEntity): Promise<DappEntity> {
    throw new Error('Method not implemented.')
  }
  update(dapp: DappEntity): Promise<void> {
    throw new Error('Method not implemented.')
  }
  delete(id: UniqueEntityID): Promise<void> {
    throw new Error('Method not implemented.')
  }
  findAll(): Promise<DappEntity[]> {
    throw new Error('Method not implemented.')
  }
}
