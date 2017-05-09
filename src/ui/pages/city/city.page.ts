import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { Map } from '../../../data/models/Map';

@Component({
  selector: 'city',
  styleUrls: [ 'city.page.scss' ],
  templateUrl: 'city.page.html'
})
export class CityPage {
  public maps : Map[];

  constructor(private worldService : WorldService) {
    worldService.getEbrichsburg().subscribe((data : any) => this.maps = data[ 'maps' ]);
  }

}
