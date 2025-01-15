import { AppModule } from './app.module'

// Bootstrap function to initialize the application
;(async function bootstrap() {
  // Create an instance of AppModule
  const appModule = new AppModule()

  // Wait for the DOM to fully load before initializing the module
  document.addEventListener('DOMContentLoaded', async () => {
    await appModule.onModuleInit()
  })
})()
