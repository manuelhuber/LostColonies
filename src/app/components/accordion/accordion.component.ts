import { AfterContentInit, AfterViewInit, Component, ContentChildren, Input, QueryList } from '@angular/core';
import { ExpandableComponent } from '../expandables/expandable.component';
import { ActivatedRoute, Params } from '@angular/router';
import { LINKABLE_PARAM } from '../../directive/linkable/linkable.directive';

@Component({
  selector: 'lc-accordion',
  templateUrl: 'accordion.component.html',
})
/**
 * The component handling multiple accordion entries. Only 1 entry can be open at once.
 */
export class AccordionComponent implements AfterContentInit, AfterViewInit {

  // The number of the expandable that should be opened by default (zero indexed)
  @Input() public openAtStart: number;
  @ContentChildren(ExpandableComponent) private entries: QueryList<ExpandableComponent>;
  // Should the specified entry be opened at the start
  private openDefaultEntry: boolean;

  constructor(private route: ActivatedRoute) {
    // Don't open default entry when the URL has a link to a specific expandable
    this.route.queryParams.subscribe((params: Params) => {
      this.openDefaultEntry = !params[ LINKABLE_PARAM ];
    });
  }

  /**
   * Add a click handler to each entry
   */
  public ngAfterContentInit(): void {
    this.entries.toArray().forEach((entry) => {
      entry.isVisible.subscribe((a) => {
        if (a.visible) {
          this.closeOthersThan(a.self);
        }
      });
    });
  }

  /**
   * The default entry has to be opened in a timeout after view was initialized to avoid conflicts with content that's
   * generated with *ngFor
   */
  public ngAfterViewInit(): void {
    if (this.openDefaultEntry && this.openAtStart >= 0) {
      setTimeout(() => {
        this.closeOthersThan(this.entries.toArray()[ this.openAtStart ]);
      });
    }
  }

  /**
   * Hide all entries except the selected one
   * If the selected entry is already visible hide it
   */
  private closeOthersThan(that: ExpandableComponent): void {
    this.entries.toArray().forEach((entry) => {
      entry.visible = entry === that;
    });
  }
}
