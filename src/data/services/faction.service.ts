import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FactionService {

  private factions: Observable<any>;

  constructor(private http: HttpClient) {
  }

  public getFactions(): Observable<any> {
    if (this.factions === undefined) {
      this.factions = this.http.get('/assets/data/factions.json');
    }
    return this.factions;
  }
}
