import { Component, Input, OnInit } from '@angular/core';
import { Gang } from '../../../data/models/gang';

@Component({
  selector: 'gang',
  templateUrl: 'gang.component.html',
  styleUrls: [ 'gang.component.scss' ]
})
export class GangComponent implements OnInit {
  @Input() public gang : Gang;
  public activeSession : number = -1;
  public sessionExpanded : boolean = false;

  public toggleSession() : void {
    this.sessionExpanded = !this.sessionExpanded;
  }

  public ngOnInit() : void {
    this.activeSession = this.gang && this.gang.sessions.length - 1;
  }

}
