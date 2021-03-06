import { Component, ElementRef } from '@angular/core';
import { DEFAULT_SCROLL_OPTIONS } from '../../../shared/scroll.model';

@Component({
  selector: 'lc-expandable-content',
  templateUrl: 'expandable-content.component.html',
})
/**
 * The content for the accordion entries. Will be collapsed when the accordion entry is closed
 * There are slight animation bugs if the outmost div of the content isn't the full size of the content (e.g. when one
 * of the child divs has a margin that goes beyond the parent div)
 */
export class ExpandableContentComponent {

  constructor(private elem: ElementRef) {
  }

  public scrollIntoView(): void {
    this.elem.nativeElement.scrollIntoView(DEFAULT_SCROLL_OPTIONS);
  }

  /**
   * Returns the height of the content
   */
  get height(): number {
    return this.elem.nativeElement.firstChild.clientHeight;
  }
}
