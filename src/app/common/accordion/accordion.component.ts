import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { AccordionEntryComponent } from './entry/accordion-entry.component';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html'
})
/**
 * The component handling multiple accordion entries. Only 1 entry can be open at once.
 */
export class AccordionComponent implements AfterContentInit {

  @ContentChildren(AccordionEntryComponent) private entries: QueryList<AccordionEntryComponent>;

  /**
   * Add a click handler to each entry
   */
  public ngAfterContentInit(): void {
    this.entries.toArray().forEach((entry) => {
      entry.headerClicked.subscribe((clickedEntry) => {
        this.toggle(clickedEntry);
      });
    });
  }

  /**
   * Hide all entries except the selected one
   */
  private toggle(selected: AccordionEntryComponent): void {
    if (selected.visible) {
      selected.visible = false;
    } else {
      this.entries.toArray().forEach((entry) => entry.visible = entry === selected);
    }
  }
}
