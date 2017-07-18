import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ExpandableComponent } from '../expandables/expandable.component';
import {
  CITY_1_ROUTE,
  CITY_1_TITLE,
  CREW_1_ROUTE,
  CREW_1_TITLE,
  CREW_2_ROUTE,
  CREW_2_TITLE,
  FACTION_ROUTE,
  FACTION_TITLE,
  INTRO_ROUTE,
  INTRO_TITLE,
  WORLD_GENERAL_ROUTE,
  WORLD_GENERAL_TITLE
} from '../../app.routes';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  public factionTitle : string = FACTION_TITLE;
  public factionRoute : string = FACTION_ROUTE;
  public worldTitle : string = WORLD_GENERAL_TITLE;
  public worldRoute : string = WORLD_GENERAL_ROUTE;
  public crewOneTitle : string = CREW_1_TITLE;
  public crewOneRoute : string = CREW_1_ROUTE;
  public crewTwoTitle : string = CREW_2_TITLE;
  public crewTwoRoute : string = CREW_2_ROUTE;
  public city1Title : string = CITY_1_TITLE;
  public city1Route : string = CITY_1_ROUTE;
  public metaTitle : string = INTRO_TITLE;
  public metaRoute : string = INTRO_ROUTE;

  @ViewChild(ExpandableComponent) public menu;

  constructor(private route : Router) {
  }

  public ngOnInit() : void {
    this.route.events.subscribe(() => this.menu.visible = false);
  }
}
