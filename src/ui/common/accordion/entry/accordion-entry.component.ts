import { Component, ContentChild, EventEmitter } from '@angular/core';
import { AccordionContentComponent } from './content/accordion-content.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'accordion-entry',
  templateUrl: 'accordion-entry.component.html',
  styleUrls: [ 'accordion-entry.component.scss' ],
  animations: [
    trigger('accordionContent', [
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      state('closed', style({
        height: '0',
        opacity: '0'
      })),
      transition('open <=> closed', animate('500ms ease'))
    ])

  ]
})
/**
 * The accordion entry. Needs exactly 1 header and 1 content component.
 * Can be styled depending on visible state. Parent div of the whole entry will have the css class "accordion-entry-hidden"
 */
export class AccordionEntryComponent {
  state : string = 'closed';
  /**
   * The content of the entry
   */
  @ContentChild(AccordionContentComponent) public content : AccordionContentComponent;

  /**
   * Subscribable for click events of the entry header
   */
  public headerClicked : EventEmitter<AccordionEntryComponent> = new EventEmitter();

  private _visible : boolean = false;

  /**
   * Makes the content of the entry (in)visible with a nice animation
   */
  set visible(a : boolean) {
    this._visible = a;
    this.state = a ? 'open' : 'closed';
  }

  get visible() : boolean {
    return this._visible;
  }

  /**
   * Emit new click event
   */
  public clickHeader() : void {
    this.headerClicked.next(this);
  }

}
