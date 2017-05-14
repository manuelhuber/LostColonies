import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { WorldEntry } from '../../../data/models/world';
import { WORLD_ROUTE } from '../../app.routes';

@Component({
  selector: 'world',
  styleUrls: [ 'world.page.scss' ],
  templateUrl: 'world.page.html'
})
export class WorldPage {

  public entries : WorldEntry[];
  public path : string = WORLD_ROUTE;

  constructor(private worldService : WorldService) {
    worldService.getWorld().subscribe((data : WorldEntry[]) => this.entries = data);
  }

}
