import { Component } from '@angular/core';
import { WorldService } from '../../../data/services/world.service';
import { WorldEntry } from '../../../data/models/world';
import { Data } from '@angular/router';

@Component({
  selector: 'world',
  styleUrls: [ 'world.page.scss' ],
  templateUrl: 'world.page.html'
})
export class WorldPage {
  public entries : Data[];

  constructor(private worldService : WorldService) {
    worldService.getWorld().subscribe((data : WorldEntry[]) => this.entries = data);
  }

}
