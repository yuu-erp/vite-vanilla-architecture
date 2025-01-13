import { AppConfig } from './interface/app-config.interface'
import { VariableService } from './services/variable.service'

export class Layout {
  constructor(private readonly variableService: VariableService<AppConfig>) {
    console.log('Layout dependencies initialized...', this.variableService)
    this.render()
  }

  private render() {}
}
