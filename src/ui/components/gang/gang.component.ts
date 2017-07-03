import { Component, Input } from '@angular/core';
import { Gang } from '../../../data/models/gang';
import { PLAYERS_ROUTE } from '../../app.routes';

@Component({
  selector: 'gang',
  templateUrl: 'gang.component.html',
  styleUrls: [ 'gang.component.scss' ]
})
export class GangComponent {
  @Input() public gang : Gang;
  public path : string = PLAYERS_ROUTE;

}
