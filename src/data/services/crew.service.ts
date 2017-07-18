import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Gang } from '../models/gang';
import { Session } from '../models/session';
import { CREW_2_ROUTE } from '../../ui/app.routes';

@Injectable()
export class CrewService {

  private crewOne : Observable<Gang>;
  private crewTwo : Observable<Gang>;

  constructor(private http : Http) {
  }

  public getCrewDataForPath(path : string) : Observable<Gang> {
    if (path === CREW_2_ROUTE) {
      return this.getCrewTwoData();
    } else {
      return this.getCrewOneData();
    }
  }

  public getCrewOneData() : Observable<Gang> {
    if (!this.crewOne) {
      this.crewOne = this.getCrew('assassins');
    }
    return this.crewOne;
  }

  public getCrewTwoData() : Observable<Gang> {
    if (!this.crewTwo) {
      this.crewTwo = this.getCrew('assassins2');
    }
    return this.crewTwo;
  }

  private getCrew(filename : string) : Observable<Gang> {
    return this.http.get('/assets/data/' + filename + '.json').map((res) => res.json()).map((gang : Gang) => {
      gang.sessions = this.sortSessions(gang.sessions);
      return gang;
    });
  }

  private sortSessions(sessions : Session[]) : Session[] {
    return sessions.map((session : Session) => {
      session.date = Date.parse(<any> session.date);
      return session;
    }).sort((a, b) => a.date - b.date);
  }

}
