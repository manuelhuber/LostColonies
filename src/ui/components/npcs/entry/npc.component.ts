import { Component, Input } from '@angular/core';
import { Npc } from '../../../../data/models/npc';
import { LinkLocation } from '../../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'npc',
  templateUrl: 'npc.component.html',
  styleUrls: [ 'npc.component.scss' ]
})
export class NpcComponent {
  @Input() public npc : Npc;
  @Input() public alignRight : boolean;
  @Input() public excludeLinks : LinkLocation[];
}
