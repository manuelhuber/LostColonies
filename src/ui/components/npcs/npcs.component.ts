import { Component, Input } from '@angular/core';
import { Npc } from '../../../data/models/npc';

@Component({
  selector: 'npcs',
  templateUrl: 'npcs.component.html',
  styleUrls: [ 'npcs.component.scss' ]
})
export class NpcsComponent {
  @Input() public npcs : Npc[];
  public expanded : boolean;
}
