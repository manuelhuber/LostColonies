import { Component, Input } from '@angular/core';
import { Character } from '../../../data/models/character';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'character',
  templateUrl: 'characters.component.html',
  styleUrls: [ 'characters.component.scss' ]
})
export class CharactersComponent {
  @Input() public excludeLinks : LinkLocation[];
  @Input() public character : Character;

}
