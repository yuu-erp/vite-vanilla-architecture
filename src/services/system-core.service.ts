export class SystemCoreService {
  private static instance: SystemCoreService

  constructor() {
    console.log('SystemCoreService dependencies initialized...')
  }

  // Method to get the singleton instance
  public static getInstance(): SystemCoreService {
    if (!SystemCoreService.instance) {
      SystemCoreService.instance = new SystemCoreService()
    }
    return SystemCoreService.instance
  }
}
