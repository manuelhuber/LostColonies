import { Session } from './session';
import { Npc } from './npc';

export class Gang {
  public name : string;
  public description : string;
  public imageUrl : string;
  public sessions : Session[];
  public npcs : Npc[];
}
