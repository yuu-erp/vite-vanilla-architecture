import { IdGenerator } from 'src/interface/id-generator.interface'

export class GenerateRandomString implements IdGenerator {
  private characters: string
  constructor() {
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    console.log('GenerateRandomString dependencies initialized...')
  }
  generateId(): string {
    let result = ''
    const charactersLength = this.characters.length
    for (let i = 0; i < length; i++) {
      result += this.characters.charAt(Math.floor(Math.random() * charactersLength))
    }
    return result
  }
}
