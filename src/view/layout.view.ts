import { RenderView } from 'src/interface/render-view.interface'

export class LayoutView {
  rootElement: HTMLElement

  constructor(
    private readonly statusBarView: RenderView,
    private readonly mainView: RenderView,
    private readonly pagination: RenderView,
    private readonly dock: RenderView
  ) {
    // Ensure that rootElement is properly initialized
    this.rootElement = document.getElementById('root') as HTMLElement
    if (!this.rootElement) {
      throw new Error('Root element not found')
    }
    console.log('LayoutView dependencies initialized...', this.rootElement)
  }

  // Render method to append the views into the root element
  render() {
    // Clear the root element (optional)
    this.rootElement.innerHTML = ''
    const fragmentLayout = this.appendChildFragment()
    // Render and append each view
    this.rootElement.appendChild(fragmentLayout)
  }

  private appendChildFragment() {
    const fragment = document.createDocumentFragment()
    fragment.appendChild(this.statusBarView.render())
    fragment.appendChild(this.mainView.render())
    fragment.appendChild(this.pagination.render())
    fragment.appendChild(this.dock.render())
    return fragment
  }
}
