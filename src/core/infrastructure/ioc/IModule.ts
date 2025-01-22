import { Container } from 'inversify'

export interface IModule {
  container: Container
  getContainer(): Container
}
