export interface LayoutCalculationRepository {
  getHeightStatusBar(): number
  getScreenCheckPoint(): number
  getHeightPagination(): number
  getHeightDock(): number

  getColumnNumber(): number
  getColumnDockNumber(): number
  getItemWidth(): number

  init(): void
}
