import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../../../data/models/session';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'lc-sessions',
  templateUrl: 'sessions.component.html',
  styleUrls: [ 'sessions.component.scss' ],
})
export class SessionsComponent implements OnInit {
  @Input() public sessions: Session[];
  @Input() public excludeLinks: LinkLocation[];
  public activeSession = -1;
  public sessionExpanded = false;

  @Input() public gangName: string;

  get nextAvailable(): boolean {
    return this.activeSession < this.sessions.length - 1;
  }

  get previousAvailable(): boolean {
    return this.activeSession > 0;
  }

  public toggleSession(): void {
    this.sessionExpanded = !this.sessionExpanded;
  }

  public ngOnInit(): void {
    this.activeSession = this.sessions.length - 1;
  }

  public next(): void {
    if (this.nextAvailable) {
      this.activeSession++;
    }
  }

  public previous(): void {
    if (this.previousAvailable) {
      this.activeSession--;
    }
  }

}
