import { Component, ContentChild, EventEmitter } from '@angular/core';
import { AccordionContentComponent } from './content/accordion-content.component';

@Component({
  selector: 'accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: [
    './accordion-entry.component.css'
  ]
})
/**
 * The accordion entry. Needs exactly 1 header and 1 content component.
 */
export class AccordionEntryComponent {

  /**
   * The content of the entry
   */
  @ContentChild(AccordionContentComponent) public content: AccordionContentComponent;

  /**
   * Subscribable for click events of the entry header
   */
  public headerClicked: EventEmitter<AccordionEntryComponent> = new EventEmitter();
  private _visible: boolean;

  /**
   * Height in pixel
   */
  private _height: number = 0;

  /**
   * Returns the height in pixel as formatted string for use in CSS
   */
  get height(): string {
    return this._height + 'px';
  }

  set visible(a: boolean) {
    this._visible = a;
    this._height = a ? this.content.height : 0;
  }

  get visible(): boolean {
    return this._visible;
  }

  /**
   * Emit new click event
   */
  public clickHeader(): void {
    this.headerClicked.next(this);
  }

}
