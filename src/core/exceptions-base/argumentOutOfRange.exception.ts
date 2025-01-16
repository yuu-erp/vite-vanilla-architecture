export class ArgumentOutOfRangeException extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ArgumentOutOfRangeException'
  }
}
