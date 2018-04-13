import { Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { ExpandableContentComponent } from './content/expandable-content.component';
import { ExpandableHeaderComponent } from './header/expandable-header.component';
import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';

// MAGIC NUMBER WARNING: the delay should be as long or a bit longer than the animation duration!
export const EXPENDABLE_ANIMATION_DURATION = 500;

const open = 'open';
const closed = 'closed';

@Component({
  selector: 'lc-expandable',
  templateUrl: 'expandable.component.html',
  styleUrls: [ 'expandable.component.scss' ],
  animations: [
    trigger('expandableContent', [
      state(open, style({
        height: '*',
      })),
      state(closed, style({
        height: '0',
      })),
      transition('open <=> closed', animate(EXPENDABLE_ANIMATION_DURATION + 'ms ease-out')),
    ]),
  ],
})
/**
 * The accordion entry. Needs exactly 1 header and 1 content component.
 * Can be styled depending on visible state
 * Parent div of the whole entry will have the css class "accordion-entry-hidden" - but to use it you need to set
 * encapsulation to ViewEncapsulation.None
 */
export class ExpandableComponent {

  /**
   * The content of the entry
   */
  @ContentChild(ExpandableContentComponent) public content: ExpandableContentComponent;
  @ContentChild(ExpandableHeaderComponent) public header: ExpandableHeaderComponent;

  @Input() public scrollIntoViewOnExpand = true;

  @Output()
  public visibleChange: EventEmitter<boolean> = new EventEmitter();

  // For easier use with the accordion. Kind of dirty code but convenient
  public isVisible: EventEmitter<{ visible: boolean, self: ExpandableComponent }> = new EventEmitter();
  state = closed;

  /**
   * The value for the CSS height attribute
   */
  public height = '0';

  private _visible = false;

  get visible(): boolean {
    return this._visible;
  }

  /**
   * Makes the content of the entry (in)visible with a nice animation
   */
  @Input()
  set visible(a: boolean) {
    if (this._visible === a) {
      // No change => do nothing
      return;
    }
    this.state = a ? open : closed;
    this._visible = a;
    this.visibleChange.next(a);
    this.isVisible.next({visible: a, self: this});
  }

  public animationDone(event: AnimationEvent) {
    if (event.toState === open && this.scrollIntoViewOnExpand) {
      this.header ? this.header.scrollIntoView() : this.content.scrollIntoView();
    }
  }

  /**
   * Emit new click event
   */
  public clickHeader(): void {
    this.visible = !this.visible;
    this.isVisible.next({visible: this.visible, self: this});
  }

}
