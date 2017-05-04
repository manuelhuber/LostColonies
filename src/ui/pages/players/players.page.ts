import { Component } from '@angular/core';
import { Player } from '../../../data/models/player';
import { PlayerService } from '../../../data/services/player.service';

@Component({
  selector: 'players',
  templateUrl: 'players.page.html',
  styleUrls: [ 'players.page.scss' ]
})
export class PlayersPage {
  public players : Player[];

  constructor(private playerService : PlayerService) {
    playerService.getPlayers().subscribe((data : Player[]) => this.players = data.sort((a, b) => a.name.localeCompare(b.name)));
  }

}
