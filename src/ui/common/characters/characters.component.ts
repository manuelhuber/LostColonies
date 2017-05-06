import { Component, Input } from '@angular/core';
import { Character } from '../../../data/models/character';

@Component({
  selector: 'characters',
  templateUrl: 'characters.component.html',
  styleUrls: [ 'characters.component.scss' ]
})
export class CharactersComponent {
  @Input() set characters(chars : Character[]) {
    this.character = chars[ 0 ];
  };

  public character : Character;

  public getDescriptions(faction : Character) : string[] {
    return Object.keys(faction.description);
  }
}
