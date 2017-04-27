import { Component, ViewEncapsulation } from '@angular/core';
import { FactionService } from '../../../data/services/faction.service';
import { Faction } from '../../../data/models/factions';

@Component({
  selector: 'factions',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [ 'factions.page.scss' ],
  templateUrl: 'factions.page.html'
})
export class FactionsPage {
  public factions: Faction[];

  constructor(private factionService: FactionService) {
    factionService.getFactions().subscribe((data: Faction[]) => this.factions = data);
  }

}
