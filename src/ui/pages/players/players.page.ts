import { Component } from '@angular/core';
import { Player } from '../../../data/models/player';
import { GangsAndPlayers, PlayerService } from '../../../data/services/player.service';
import { Gang } from '../../../data/models/gang';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';
import { PLAYERS_ROUTE } from '../../app.routes';
import { Character } from '../../../data/models/character';
import { Npc } from '../../../data/models/npc';
import { Session } from '../../../data/models/session';

@Component({
  selector: 'players',
  templateUrl: 'players.page.html',
  styleUrls: [ 'players.page.scss' ]
})
export class PlayersPage {

  get excludeLinks() : LinkLocation[] {
    return this.gang && [ {link: PLAYERS_ROUTE, linkable: this.gang.name} ];
  }

  get gang() : Gang {
    return this.data && this.data.gangs[ 0 ];
  }

  get players() : Player[] {
    return this.data && this.data.players;
  }

  private data : GangsAndPlayers;

  public linksForPlayer(player : Player) : string[] {
    return [ player.name, ... player.characters.map((value : Character) => value.name) ];
  }

  public linksForGang(gang : Gang) : string[] {
    return [ gang.name,
      ... gang.npcs.map((value : Npc) => value.name),
      ... gang.sessions.map((session : Session) => session.name) ];
  }

  constructor(private playerService : PlayerService) {
    playerService.getData().subscribe((data) => this.data = data);
  }

}
