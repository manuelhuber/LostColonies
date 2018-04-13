import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { HighlightMap } from '../../../data/models/map';
import { CITY_1_ROUTE } from '../../app.routes.model';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';
import { MapHighlight } from '../../../data/models/mapHighlight';

@Component({
  selector: 'lc-city',
  styleUrls: [ 'city.page.scss' ],
  templateUrl: 'city.page.html',
})
export class CityPage {
  public maps: HighlightMap[];

  constructor(private worldService: WorldService) {
    worldService.getDoskvol().subscribe(maps => this.maps = maps);
  }

  public getExcludeLinks(map: HighlightMap): LinkLocation[] {
    return [ {link: CITY_1_ROUTE, linkable: map.name} ];
  }

  public getLinksForMap(map: HighlightMap): string[] {
    return map && map.highlights && map.highlights.map((value: MapHighlight) => value.name);
  }

}
