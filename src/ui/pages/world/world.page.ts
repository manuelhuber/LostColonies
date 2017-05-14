import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { WorldEntry } from '../../../data/models/world';

@Component({
  selector: 'world',
  styleUrls: [ 'world.page.scss' ],
  templateUrl: 'world.page.html'
})
export class WorldPage {
  public entries : WorldEntry[];

  constructor(private worldService : WorldService) {
    worldService.getWorld().subscribe((data : WorldEntry[]) => this.entries = data);
  }

}
