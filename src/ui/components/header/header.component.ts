import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ExpandableComponent } from '../expandables/expandable.component';
import { CITY_1_ROUTE, FACTION_ROUTE, META_ROUTE, PLAYERS_ROUTE, WORLD_ROUTE } from '../../app.routes';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public factionRoute : string = FACTION_ROUTE;
  public worldRoute : string = WORLD_ROUTE;
  public playersRoute : string = PLAYERS_ROUTE;
  public city1Route : string = CITY_1_ROUTE;
  public metaRoute : string = META_ROUTE;

  public menuOpen : boolean;
  @ViewChild(ExpandableComponent) public menu;

  constructor(private route : Router) {
  }

  public ngOnInit() : void {
    this.route.events.subscribe(() => this.menu.visible = false);
  }
}
