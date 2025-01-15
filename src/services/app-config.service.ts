export class AppConfigService {
  private static instance: AppConfigService

  // Private constructor to prevent instantiation from outside
  private constructor() {}

  // Method to get the singleton instance
  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService()
    }
    return AppConfigService.instance
  }
}
