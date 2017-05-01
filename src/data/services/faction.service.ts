import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Faction } from '../models/factions';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FactionService {

  private factions : Observable<Faction[]>;

  constructor(private http : Http) {
  }

  public getFactions() : Observable<Faction[]> {
    if (this.factions === undefined) {
      this.factions = this.http.get('/assets/data/factions.json').map((res) => res.json());
    }
    return this.factions;
  }
}
