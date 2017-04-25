import { Component, ContentChild, EventEmitter } from '@angular/core';
import { AccordionContentComponent } from './content/accordion-content.component';

@Component({
  selector: 'accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: [
    './accordion-entry.component.css'
  ]
})
export class AccordionEntryComponent {

  @ContentChild(AccordionContentComponent) public content: AccordionContentComponent;
  public headerClicked: EventEmitter<AccordionEntryComponent> = new EventEmitter();
  private _visible: boolean;
  private _height: number = 0;

  get hidden(): boolean {
    return this.height === '0px';
  }

  get height(): string {
    return this._height + 'px';
  }

  set visible(a: boolean) {
    this._visible = a;
    this._height = a ? this.content.height : 0;
  }

  get visible(): boolean {
    return this._visible;
  }

  private clickHeader(): void {
    this.headerClicked.next(this);
  }

}
