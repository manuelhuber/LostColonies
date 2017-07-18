import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Gang } from '../models/gang';
import { Session } from '../models/session';

@Injectable()
export class PlayerService {

  private crewOne : Observable<Gang>;

  constructor(private http : Http) {
  }

  public getCrewOneData() : Observable<Gang> {
    if (!this.crewOne) {
      this.crewOne = this.http.get('/assets/data/assassins.json').map((res) => res.json()).map((gang : Gang) => {
        gang.sessions = this.sortSessions(gang.sessions);
        return gang;
      });
    }
    return this.crewOne;
  }

  private sortSessions(sessions : Session[]) : Session[] {
    return sessions.map((session : Session) => {
      session.date = Date.parse(<any> session.date);
      return session;
    }).sort((a, b) => a.date - b.date);
  }

}
