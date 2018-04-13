import { Component, Input } from '@angular/core';
import { Npc } from '../../../data/models/npc';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'lc-npcs',
  templateUrl: 'npcs.component.html',
  styleUrls: [ 'npcs.component.scss' ],
})
export class NpcsComponent {
  @Input() public npcs: Npc[];
  @Input() public excludeLinks: LinkLocation[];
  public expanded: boolean;
}
