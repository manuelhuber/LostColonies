import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'accordion-content',
  templateUrl: 'accordion-content.component.html'
})
/**
 * The content for the accordion entries. Will be collapsed when the accordion entry is closed
 * There are slight animation bugs if the outmost div of the content isn't the full size of the content (e.g. when one
 * of the child divs has a margin that goes beyond the parent div)
 */
export class AccordionContentComponent {

  constructor(private elem : ElementRef) {
  }

  /**
   * Returns the height of the content
   */
  get height() : number {
    return this.elem.nativeElement.firstChild.clientHeight;
  }
}
