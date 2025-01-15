import { generatePrefixId } from 'src/helpers/idGenerator/ids'

export type EntityId = string | number

export class UniqueEntityID {
  protected readonly id: EntityId

  constructor(_id?: EntityId) {
    // Nếu không có id, tạo id mới với tiền tố 'entity'
    this.id = _id || generatePrefixId('entity')

    // Kiểm tra tính hợp lệ của id
    if (typeof this.id !== 'string' && typeof this.id !== 'number') {
      throw new Error('ID must be a string or a number.')
    }
  }

  equals(_id?: UniqueEntityID): boolean {
    if (!_id) {
      return false
    }
    // So sánh id của hai đối tượng
    return _id.toValue() === this.id
  }

  toString(): string {
    return String(this.id)
  }

  toValue(): EntityId {
    return this.id
  }
}
