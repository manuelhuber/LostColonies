import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../models/player';

@Injectable()
export class PlayerService {

  private player : Observable<Player[]>;

  constructor(private http : Http) {
  }

  public getPlayers() : Observable<Player[]> {
    if (this.player === undefined) {
      this.player = this.http.get('/assets/data/players.json').map((res) => res.json());
    }
    return this.player;
  }
}
