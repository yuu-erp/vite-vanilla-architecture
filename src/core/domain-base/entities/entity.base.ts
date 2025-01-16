import { ArgumentInvalidException } from '../exceptions/argumentInvalid.exception'
import { ArgumentNotProvidedException } from '../exceptions/argumentNotProvided.exception'
import { ArgumentOutOfRangeException } from '../exceptions/argumentOutOfRange.exception'
import { UniqueEntityID } from './unique-entity'

export interface BaseEntityProps {
  id: UniqueEntityID
  createdAt: Date
  updatedAt: Date
}

export interface CreateEntityProps<T> {
  props: T
  id?: UniqueEntityID
  createdAt?: Date
  updatedAt?: Date
}

export abstract class Entity<Props> {
  #id: UniqueEntityID
  readonly #createdAt: Date
  readonly #props: Props
  #updatedAt: Date

  constructor({ id, props, createdAt, updatedAt }: CreateEntityProps<Props>) {
    this.#id = id || new UniqueEntityID() // Nếu không có id, tạo id mới
    this.#validateProps(props)
    const now = new Date()
    this.#createdAt = createdAt || now
    this.#updatedAt = updatedAt || now
    this.#props = props
    this.validate()
  }

  static isEntity(entity: unknown): entity is Entity<unknown> {
    return entity instanceof Entity
  }

  get id(): UniqueEntityID {
    return this.#id
  }

  get createdAt(): Date {
    return this.#createdAt
  }

  get updatedAt(): Date {
    return this.#updatedAt
  }

  getProps(): Props & BaseEntityProps {
    return Object.freeze({
      id: this.id,
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...this.#props
    })
  }

  toObject() {
    const result = {
      id: this.id.toValue(),
      createdAt: this.#createdAt,
      updatedAt: this.#updatedAt,
      ...this.getProps()
    }
    return Object.freeze(result)
  }

  abstract validate(): void

  // Hàm kiểm tra validate props
  #validateProps(props: Props) {
    const MAX_PROPS = 32

    if (props == null || (typeof props === 'object' && Object.keys(props).length === 0)) {
      throw new ArgumentNotProvidedException('Entity props should not be empty')
    }

    if (typeof props !== 'object') {
      throw new ArgumentInvalidException('Entity props should be an object')
    }

    if (Object.keys(props).length > MAX_PROPS) {
      throw new ArgumentOutOfRangeException(`The entity props count must be smaller than ${MAX_PROPS} properties`)
    }
  }
}
