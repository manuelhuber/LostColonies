import { AfterContentInit, Component, ContentChild, ElementRef, Input } from '@angular/core';
import { AccordionContentComponent } from './content/accordion-content.component';

@Component({
  selector: 'accordion-entry',
  templateUrl: './accordion-entry.component.html',
  styleUrls: [
    './accordion-entry.component.css'
  ]
})
export class AccordionEntryComponent implements AfterContentInit {

  @ContentChild(AccordionContentComponent) content: AccordionContentComponent;
  private _visible: boolean;
  private _height: number = 0;

  constructor(private element: ElementRef) {
    // console.log(this.element.nativeElement);
    // console.log(this.content);
    // console.log(this.element.nativeElement.select('#content-wrapper'));
  }

  public ngAfterContentInit(): void {
  }

  get hidden(): boolean {
    return this.height === '0px';
  }

  get height(): string {
    return this._height + 'px';
  }

  @Input() set visible(a: boolean) {
    this._visible = a;
    this._height = a ? this.content.height : 0;
  }

  get visible(): boolean {
    return this._visible;
  }

}
