import { Component } from '@angular/core';
import { PlayerService } from '../../../data/services/player.service';
import { Gang } from '../../../data/models/gang';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';
import { PLAYERS_ROUTE } from '../../app.routes';
import { Character } from '../../../data/models/character';
import { Npc } from '../../../data/models/npc';
import { Session } from '../../../data/models/session';

@Component({
  selector: 'crew',
  templateUrl: 'crew.page.html',
  styleUrls: [ 'crew.page.scss' ]
})
export class CrewPage {

  get excludeGangLinks() : LinkLocation[] {
    return this.gang && [ {link: PLAYERS_ROUTE, linkable: this.gang.name} ];
  }

  public gang : Gang;

  constructor(private playerService : PlayerService) {
    playerService.getCrewOneData().subscribe((data) => this.gang = data);
  }

  public excludeCharacterLinks(character : Character) : LinkLocation[] {
    return [ {link: PLAYERS_ROUTE, linkable: character.name} ];
  }

  public linksForCharacter(character : Character) : string[] {
    return [ character.name ];
  }

  public linksForGang(gang : Gang) : string[] {
    return [ gang.name,
      ... gang.npcs.map((value : Npc) => value.name),
      ... gang.sessions.map((session : Session) => session.name) ];
  }

}
