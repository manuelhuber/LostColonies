import { Component, ElementRef } from '@angular/core';
import { DEFAULT_SCROLL_OPTIONS } from '../../../shared/scroll.model';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.component.html'
})
/**
 * The header for the accordion entry. Is always visible. The AccordionComponent will add click handlers
 * Can be styled depending on visible state. Parent div of the whole entry will have the css class "accordion-entry-hidden"
 */
export class ExpandableHeaderComponent {

  constructor(private elem: ElementRef) {
  }

  public scrollIntoView(): void {
    this.elem.nativeElement.scrollIntoView(DEFAULT_SCROLL_OPTIONS);
  }
}
