import { Character } from './character';
import { Achievement } from './achievement';

export class Player {
  public name : string;
  public characters : Character[];
  public achievements : Achievement[];
}
