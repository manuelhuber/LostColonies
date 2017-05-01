import { Component } from '@angular/core';
import { FactionService } from '../../../data/services/faction.service';
import { Faction } from '../../../data/models/factions';

@Component({
  selector: 'factions',
  templateUrl: 'factions.page.html'
})
export class FactionsPage {
  public factions : Faction[];

  constructor(private factionService : FactionService) {
    factionService.getFactions().subscribe((data : Faction[]) => this.factions = data);
  }

}
