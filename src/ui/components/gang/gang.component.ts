import { Component, Input, OnInit } from '@angular/core';
import { Gang } from '../../../data/models/gang';
import { PLAYERS_ROUTE } from '../../app.routes';

@Component({
  selector: 'gang',
  templateUrl: 'gang.component.html',
  styleUrls: [ 'gang.component.scss' ]
})
export class GangComponent implements OnInit {
  @Input() public gang : Gang;
  public activeSession : number = -1;
  public sessionExpanded : boolean = false;
  public path : string = PLAYERS_ROUTE;

  public toggleSession() : void {
    this.sessionExpanded = !this.sessionExpanded;
  }

  public ngOnInit() : void {
    this.gang.sessions = this.gang.sessions.sort((a, b) => a.date - b.date);
    this.activeSession = this.gang && this.gang.sessions.length - 1;
  }

  get nextAvailable() : boolean {
    return this.activeSession < this.gang.sessions.length - 1;
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
