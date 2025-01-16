import { Entity } from 'src/core/domain-base/entities/entity.base'
import { DappProps } from './dapp.type'
import { UniqueEntityID } from 'src/core/domain-base/entities/unique-entity'

export class DappEntity extends Entity<DappProps> {
  constructor(props: DappProps, id?: UniqueEntityID) {
    super({
      id: id || new UniqueEntityID(),
      props,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }

  // Phương thức validate tùy chỉnh cho Dapp
  validate(): void {
    // Ví dụ validate `name`, `version`, `bundleId` phải không rỗng
    if (!this.getProps().name) {
      throw new Error('Dapp name cannot be empty')
    }
    if (!this.getProps().version) {
      throw new Error('Dapp version cannot be empty')
    }
    if (!this.getProps().bundleId) {
      throw new Error('Dapp bundleId cannot be empty')
    }
  }

  // Phương thức tùy chỉnh: ví dụ lấy thông tin logo
  getLogo(): string {
    return this.getProps().logo
  }
}
