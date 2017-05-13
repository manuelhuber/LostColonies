import { Component, OnInit } from '@angular/core';
import { FactionService } from '../../../data/services/faction.service';
import { Faction } from '../../../data/models/faction';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export const FACTION_PARAM : string = 'group';

@Component({
  selector: 'factions',
  templateUrl: 'factions.page.html',
  styleUrls: [ 'factions.page.scss' ]
})
export class FactionsPage implements OnInit {

  public factions : Faction[];
  private allFactions : Observable<{ [group : string] : Faction[] }>;

  constructor(private factionService : FactionService, private activatedRoute : ActivatedRoute) {
    this.allFactions = factionService.getFactions();
  }

  public getDescriptions(faction : Faction) : string[] {
    return Object.keys(faction.description);
  }

  public ngOnInit() : void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.allFactions.subscribe((factions : any) => {
        let group : string = params[ FACTION_PARAM ];
        if (group && factions[ group ]) {
          this.factions = factions[ group ];
        } else {
          this.factions = Object.keys(factions)
            .map((key) => factions[ key ])
            .reduce((previousValue, currentValue) => previousValue.concat(currentValue), []);
        }
      });
    });
  }

}
