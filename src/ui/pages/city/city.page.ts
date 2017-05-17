import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { MyMap } from '../../../data/models/map';
import { CITY_1_ROUTE } from '../../app.routes';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

@Component({
  selector: 'city',
  styleUrls: [ 'city.page.scss' ],
  templateUrl: 'city.page.html'
})
export class CityPage {
  public maps : MyMap[];

  constructor(private worldService : WorldService) {
    worldService.getEbrichsburg().subscribe((data : any) => this.maps = data[ 'maps' ]);
  }

  public getExcludeLinks(map : MyMap) : LinkLocation[] {
    return [ {link: CITY_1_ROUTE, linkable: map.name} ];
  }

}
