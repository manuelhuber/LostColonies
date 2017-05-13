import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Player } from '../models/player';
import { Gang } from '../models/gang';

export interface GangsAndPlayers {
  players : Player[];
  gangs : Gang[];
}

@Injectable()
export class PlayerService {

  private data : Observable<GangsAndPlayers>;

  constructor(private http : Http) {
  }

  public getData() : Observable<GangsAndPlayers> {
    this.fetchData();
    return this.data;
  }

  private fetchData() {
    if (this.data === undefined) {
      this.data = this.http.get('/assets/data/players.json').map((res) => res.json());
    }
  }
}
