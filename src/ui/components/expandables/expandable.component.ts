import { Component, ContentChild, EventEmitter, Input } from '@angular/core';
import { ExpandableContentComponent } from './content/expandable-content.component';

@Component({
  selector: 'expandable',
  templateUrl: 'expandable.component.html',
  styleUrls: [ 'expandable.component.scss' ]
})
/**
 * The accordion entry. Needs exactly 1 header and 1 content component.
 * Can be styled depending on visible state. Parent div of the whole entry will have the css class "accordion-entry-hidden"
 */
export class ExpandableComponent {

  @Input() public expandOnClick : boolean;

  /**
   * The content of the entry
   */
  @ContentChild(ExpandableContentComponent) public content : ExpandableContentComponent;

  /**
   * Subscribable for click events of the entry header
   */
  public headerClicked : EventEmitter<ExpandableComponent> = new EventEmitter();

  /**
   * The value for the CSS height attribute
   */
  public height : string = '0';

  private timeout : any;
  private _visible : boolean = false;

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
      // MAGIC NUMBER WARNING: the delay should be a bit longer than the animation duration!
      this.timeout = setTimeout(() => this.height = 'auto', 600);
    } else {
      // Set the height from auto to the actual size (needed for animation)
      this.height = this.content.height + 'px';
      // Animate to size 0
      this.timeout = setTimeout(() => this.height = '0', 50);
    }
  }

  get visible() : boolean {
    return this._visible;
  }

  /**
   * Emit new click event
   */
  public clickHeader() : void {
    if (this.expandOnClick) {
      this.visible = !this.visible;
    }
    this.headerClicked.next(this);
  }

}
