import { Component } from '@angular/core';
import { FactionService } from '../../../data/services/faction.service';
import { Faction } from '../../../data/models/faction';

@Component({
  selector: 'factions',
  templateUrl: 'factions.page.html',
  styleUrls: [ 'factions.page.scss' ]
})
export class FactionsPage {
  public factions : Faction[];

  constructor(private factionService : FactionService) {
    factionService.getFactions().subscribe((data : Faction[]) => this.factions = data.sort((a, b) => a.name.localeCompare(b.name)));
  }

  public getDescriptions(faction : Faction) : string[] {
    return Object.keys(faction.description);
  }

}
