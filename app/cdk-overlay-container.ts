import { OverlayContainer } from '@angular/cdk/overlay';
export class CdkOverlayContainer extends OverlayContainer {
   /**
   * Create overlay container and append to ElementRef from directive
   */
  public myCreateContainer(element: HTMLElement): void {
    let container = document.createElement('div');
    container.classList.add('my-custom-overlay-container-class');

    element.appendChild(container);
    this._containerElement = container;
  }
  /**
   * Prevent creation of the HTML element, use custom method above
   */
  protected _createContainer(): void {
      return;
  }


}