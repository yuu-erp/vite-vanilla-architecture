import { injectable } from 'inversify'
import { ILoggerRepository } from 'src/core/domain/repositories/logger.repository.interface'

@injectable()
export class LoggerService implements ILoggerRepository {
  log(message: string): void {
    console.log(`[LOG] ${new Date().toISOString()} - ${message}`)
  }

  info(message: string): void {
    console.info(`[INFO] ${new Date().toISOString()} - ${message}`)
  }

  warn(message: string): void {
    console.warn(`[WARN] ${new Date().toISOString()} - ${message}`)
  }

  error(message: string): void {
    console.error(`[ERROR] ${new Date().toISOString()} - ${message}`)
  }
}
