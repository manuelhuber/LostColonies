import { Component, ContentChild, EventEmitter } from '@angular/core';
import { AccordionContentComponent } from './content/accordion-content.component';

@Component({
  selector: 'accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: [ './accordion-entry.component.scss' ]
})
/**
 * The accordion entry. Needs exactly 1 header and 1 content component.
 * Can be styled depending on visible state. Parent div of the whole entry will have the css class "accordion-entry-hidden"
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

  /**
   * The value for the CSS height attribute
   */
  public height: string = '0';

  private timeout: any;
  private _visible: boolean;

  /**
   * Makes the content of the entry (in)visible with a nice animation
   */
  set visible(a: boolean) {
    clearTimeout(this.timeout);
    this._visible = a;
    if (a) {
      // Increase to the size of the content
      this.height = this.content.height + 'px';
      // Set auto to react to size changes of the content
      // MAGIC NUMBER WARNING: the delay must correspond with the animation duration!
      this.timeout = setTimeout(() => this.height = 'auto', 600);
    } else {
      // Set the height from auto to the actual size (needed for animation)
      this.height = this.content.height + 'px';
      // Animate to size 0
      this.timeout = setTimeout(() => this.height = '0', 5);
    }
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
