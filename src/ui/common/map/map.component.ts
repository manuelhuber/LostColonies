import { Component, Input } from '@angular/core';
import { Map } from '../../../data/models/Map';

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.scss' ]
})
export class MapComponent {
  public activeDescription : number;
  @Input() public map : Map;

  public toggle(i : number) : void {
    this.activeDescription = this.activeDescription === i ? -1 : i;
  }
}
