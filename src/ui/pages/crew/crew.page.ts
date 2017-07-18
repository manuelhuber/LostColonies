import { Component } from '@angular/core';
import { CrewService } from '../../../data/services/crew.service';
import { Gang } from '../../../data/models/gang';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';
import { Character } from '../../../data/models/character';
import { Npc } from '../../../data/models/npc';
import { Session } from '../../../data/models/session';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crew',
  templateUrl: 'crew.page.html',
  styleUrls: [ 'crew.page.scss' ]
})
export class CrewPage {

  public gang : Gang;

  private path : string;

  constructor(private playerService : CrewService, private activatedRoute : ActivatedRoute) {
    activatedRoute.data.subscribe((data) => {
      this.path = data.path;
      playerService.getCrewDataForPath(this.path).subscribe((gang) => this.gang = gang);
    });
  }

  public excludeGangLinks(gang : Gang) : LinkLocation[] {
    return [ {link: this.path, linkable: gang.name} ];
  }

  public excludeCharacterLinks(character : Character) : LinkLocation[] {
    return [ {link: this.path, linkable: character.name} ];
  }

  public linksForCharacter(character : Character) : string[] {
    return [ character.name ];
  }

  public linksForGang(gang : Gang) : string[] {
    return [ gang.name,
      ... gang.npcs.map((value : Npc) => value.name),
      ... gang.sessions.map((session : Session) => session.name) ];
  }

}
