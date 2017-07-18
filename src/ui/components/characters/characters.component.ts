import { Component, Input } from '@angular/core';
import { Character } from '../../../data/models/character';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'characters',
  templateUrl: 'characters.component.html',
  styleUrls: [ 'characters.component.scss' ]
})
export class CharactersComponent {
  @Input() set characters(chars : Character[]) {
    this.character = chars[ 0 ];
  };

  @Input() public excludeLinks : LinkLocation[];

  public character : Character;

}
