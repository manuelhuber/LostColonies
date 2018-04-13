import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { WORLD_GENERAL_ROUTE } from '../../app.routes.model';
import { World } from '../../../data/models/world';
import { WorldEntry } from '../../../data/models/worldEntry';
import { HighlightMap } from '../../../data/models/map';

@Component({
  selector: 'lc-world',
  styleUrls: [ 'world.page.scss' ],
  templateUrl: 'world.page.html'
})
export class WorldPage {

  public map: HighlightMap;
  public entries: WorldEntry[];
  public path: string = WORLD_GENERAL_ROUTE;

  constructor(private worldService: WorldService) {
    worldService.getWorld().subscribe((data: World) => {
      this.entries = data.entries;
      this.map = data.map;
    });
  }

}
