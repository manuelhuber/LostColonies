import { Component, Input } from '@angular/core';
import { Map } from '../../../data/models/Map';
import { MapHighlight } from '../../../data/models/MapHighlight';

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

  public descriptionTopValue(highlight : MapHighlight) : string {
    let top = highlight.location.top;
    let heightOffset = highlight.size.y / 2;
    return (top + (top > 50 ? -heightOffset : heightOffset)) + '%';
  }
}
