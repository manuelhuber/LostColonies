import { Session } from './session';
import { Npc } from './npc';
import { Achievement } from './achievement';
import { Character } from './character';

export class Gang {
  public name: string;
  public description: string;
  public imageUrl: string;
  public sessions: Session[];
  public npcs: Npc[];
  public achievements: Achievement[];
  public characters: Character[];
}
