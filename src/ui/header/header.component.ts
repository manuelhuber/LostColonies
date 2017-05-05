import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AccordionEntryComponent } from '../common/accordion/entry/accordion-entry.component';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public menuOpen : boolean;
  @ViewChild(AccordionEntryComponent) public menu;

  constructor(private route : Router) {
  }

  public ngOnInit() : void {
    this.route.events.subscribe(() => this.menu.visible = false);
  }
}
