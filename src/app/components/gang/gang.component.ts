import { Component, Input } from '@angular/core';
import { Gang } from '../../../data/models/gang';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'gang',
  templateUrl: 'gang.component.html',
  styleUrls: [ 'gang.component.scss' ]
})
export class GangComponent {
  @Input() public gang: Gang;
  @Input() public excludeLinks: LinkLocation[];
}
