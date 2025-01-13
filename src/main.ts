import { AppModule } from './app.module'

const appModule = new AppModule()
document.addEventListener('DOMContentLoaded', () => appModule.init())
