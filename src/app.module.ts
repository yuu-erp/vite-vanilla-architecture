export class AppModule {
  constructor() {
    console.time('Time run application')
    console.log('AppModule dependencies initialized...')
    console.timeEnd('Time run application')
  }

  async onModuleInit() {
    try {
      console.log('Application initialized successfully.')
    } catch (error) {
      console.error(error)
    }
  }
}
