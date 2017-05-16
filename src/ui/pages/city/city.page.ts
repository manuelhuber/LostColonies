import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { MyMap } from '../../../data/models/Map';
import { CITY_1_ROUTE } from '../../app.routes';

@Component({
  selector: 'city',
  styleUrls: [ 'city.page.scss' ],
  templateUrl: 'city.page.html'
})
export class CityPage {
  public maps : MyMap[];
  public path : string = CITY_1_ROUTE;

  constructor(private worldService : WorldService) {
    worldService.getEbrichsburg().subscribe((data : any) => this.maps = data[ 'maps' ]);
  }

}
