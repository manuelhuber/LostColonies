import { Component, Input } from '@angular/core';
import { Character } from '../../../data/models/character';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'lc-character',
  templateUrl: 'character.component.html',
  styleUrls: [ 'character.component.scss' ],
})
export class CharacterComponent {
  @Input() public excludeLinks: LinkLocation[];
  @Input() public character: Character;

}
