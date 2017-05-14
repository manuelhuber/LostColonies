import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../../data/models/session';
import { PLAYERS_ROUTE } from '../../app.routes';

@Component({
  selector: 'sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: [ 'sessions.component.scss' ]
})
export class SessionsComponent implements OnInit {
  @Input() public sessions : Session[];
  public activeSession : number = -1;
  public sessionExpanded : boolean = false;

  @Input() gangName : string;
  public path : string = PLAYERS_ROUTE;

  public toggleSession() : void {
    this.sessionExpanded = !this.sessionExpanded;
  }

  public ngOnInit() : void {
    this.sessions = this.sessions.sort((a, b) => a.date - b.date);
    this.activeSession = this.sessions.length - 1;
  }

  get nextAvailable() : boolean {
    return this.activeSession < this.sessions.length - 1;
  }

  get previousAvailable() : boolean {
    return this.activeSession > 0;
  }

  public next() : void {
    if (this.nextAvailable) {
      this.activeSession++;
    }
  }

  public previous() : void {
    if (this.previousAvailable) {
      this.activeSession--;
    }
  }

}
