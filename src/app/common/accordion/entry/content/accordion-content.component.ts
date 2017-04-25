import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'accordion-content',
  templateUrl: './accordion-content.component.html'
})
/**
 * The content for the accordion entries. Will be collapsed when the accordion entry is closed
 */
export class AccordionContentComponent {

  constructor(private elem: ElementRef) {
  }

  /**
   * Returns the height of the content
   */
  get height(): number {
    return this.elem.nativeElement.firstChild.clientHeight;
  }
}
