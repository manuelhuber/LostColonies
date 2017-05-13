import { Component } from '@angular/core';
import { Player } from '../../../data/models/player';
import { GangsAndPlayers, PlayerService } from '../../../data/services/player.service';
import { Gang } from '../../../data/models/gang';

@Component({
  selector: 'players',
  templateUrl: 'players.page.html',
  styleUrls: [ 'players.page.scss' ]
})
export class PlayersPage {

  get gang() : Gang {
    return this.data && this.data.gangs[ 0 ];
  }

  get players() : Player[] {
    return this.data && this.data.players;
  }

  private data : GangsAndPlayers;

  constructor(private playerService : PlayerService) {
    playerService.getData().subscribe((data) => this.data = data);
  }

}
