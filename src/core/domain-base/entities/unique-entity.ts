import { generatePrefixId } from 'src/core/helpers/ids'

export type EntityId = string | number
export class UniqueEntityID {
  protected readonly id: EntityId

  constructor(_id?: EntityId) {
    this.id = typeof _id === 'number' ? String(_id) : _id || generatePrefixId('entity')
  }

  equals(_id?: UniqueEntityID): boolean {
    if (!_id) {
      return false
    }
    return _id.toValue() === this.id
  }

  toString() {
    return String(this.id)
  }

  toValue(): EntityId {
    return this.id
  }
}
