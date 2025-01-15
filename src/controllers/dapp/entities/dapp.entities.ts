import { Entity } from 'src/core/entities/entity.base'
import { Position } from 'src/types/data'
import { UniqueEntityID } from 'src/core/entities/unique-entity'

export class DappEntities extends Entity {
  constructor(
    id: UniqueEntityID, // Thay vì truyền id là number, truyền đối tượng UniqueEntityID
    public readonly bundleId: string,
    public readonly isDefault: number,
    public type: number,
    public name: string,
    public logo: string,
    public page: number,
    public position: Position,
    public isFavorite: number,
    public isVisibleOnHome: number
  ) {
    super(id) // Gọi constructor của Entity với id là đối tượng UniqueEntityID
  }

  // Phương thức validate cho DappEntities
  validate(): void {
    // Ví dụ validate: Kiểm tra sự hợp lệ của bundleId
    if (!this.bundleId) {
      throw new Error('Bundle ID is required')
    }

    // Kiểm tra các thuộc tính khác tùy theo yêu cầu
    if (this.name.length < 3) {
      throw new Error('Name must be at least 3 characters long')
    }

    // Có thể thêm các kiểm tra khác...
    console.log('DappEntities validation passed.')
  }
}
