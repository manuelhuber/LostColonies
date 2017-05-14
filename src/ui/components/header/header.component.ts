import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ExpandableComponent } from '../expandables/expandable.component';
import { FACTION_ROUTE } from '../../app.routes';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  factionRoute : string = FACTION_ROUTE;

  public menuOpen : boolean;
  @ViewChild(ExpandableComponent) public menu;

  constructor(private route : Router) {
  }

  public ngOnInit() : void {
    this.route.events.subscribe(() => this.menu.visible = false);
  }
}
