import { Component, Input } from '@angular/core';
import { Character } from '../../../data/models/character';
import { PLAYERS_ROUTE } from '../../app.routes';

@Component({
  selector: 'characters',
  templateUrl: 'characters.component.html',
  styleUrls: [ 'characters.component.scss' ]
})
export class CharactersComponent {
  @Input() set characters(chars : Character[]) {
    this.character = chars[ 0 ];
  };

  @Input() playerName : string;

  public path : string = PLAYERS_ROUTE;
  public character : Character;

  public getDescriptions(faction : Character) : string[] {
    return Object.keys(faction.description);
  }
}
