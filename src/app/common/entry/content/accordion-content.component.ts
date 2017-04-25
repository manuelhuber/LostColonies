import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'accordion-content',
  templateUrl: './accordion-content.component.html'
})
export class AccordionContentComponent {

  constructor(private elem: ElementRef) {

  }

  get height(): number {
    return this.elem.nativeElement.firstChild.clientHeight;
  }
}
