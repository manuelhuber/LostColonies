import { Component, ContentChild, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { ExpandableContentComponent } from './content/expandable-content.component';
import { ExpandableHeaderComponent } from './header/expandable-header.component';

// MAGIC NUMBER WARNING: the delay should be as long or a bit longer than the animation duration!
export const TIME_WHEN_ANIMATION_IS_OVER : number = 500;

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.component.html',
  styleUrls: [ 'expandable.component.scss' ]
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
  @ContentChild(ExpandableContentComponent) public content : ExpandableContentComponent;
  @ContentChild(ExpandableHeaderComponent) public header : ExpandableHeaderComponent;

  @Output()
  public visibleChange : EventEmitter<boolean> = new EventEmitter();

  // For easier use with the accordion. Kind of dirty code but convenient
  public isVisible : EventEmitter<{ visible : boolean, self : ExpandableComponent }> = new EventEmitter();

  /**
   * The value for the CSS height attribute
   */
  public height : string = '0';

  private timeout : any;
  private _visible : boolean = false;

  constructor(private elem : ElementRef) {
  }

  /**
   * Makes the content of the entry (in)visible with a nice animation
   */
  @Input()
  set visible(a : boolean) {
    if (this._visible === a) {
      // No change => do nothing
      return;
    }
    clearTimeout(this.timeout);
    if (!this.content) {
      return;
    }
    this._visible = a;
    if (a) {
      // Increase to the size of the content
      this.height = this.content.height + 'px';
      // Set auto to react to size changes of the content
      this.timeout = setTimeout(() => {
        this.height = 'auto';
        this.header.scrollIntoView();
      }, TIME_WHEN_ANIMATION_IS_OVER);
    } else {
      // Set the height from auto to the actual size (needed for animation)
      this.height = this.content.height + 'px';
      // Animate to size 0
      this.timeout = setTimeout(() => this.height = '0', 50);
    }
    this.visibleChange.next(a);
    this.isVisible.next({visible: a, self: this});
  }

  get visible() : boolean {
    return this._visible;
  }

  /**
   * Emit new click event
   */
  public clickHeader() : void {
    this.visible = !this.visible;
    this.isVisible.next({visible: this.visible, self: this});
  }

}
