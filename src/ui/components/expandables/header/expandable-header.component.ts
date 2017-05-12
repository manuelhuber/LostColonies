import { Component } from '@angular/core';

@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.component.html'
})
/**
 * The header for the accordion entry. Is always visible. The AccordionComponent will add click handlers
 * Can be styled depending on visible state. Parent div of the whole entry will have the css class "accordion-entry-hidden"
 */
export class ExpandableHeaderComponent {
}
