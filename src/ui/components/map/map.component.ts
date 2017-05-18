import { Component, Input } from '@angular/core';
import { MyMap } from '../../../data/models/map';
import { MapHighlight } from '../../../data/models/MapHighlight';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

// MAGIC NUMBER WARNING: This value is dependent on the margin in the map.component.scss
const DOUBLE_MARGIN : string = '20px';
const BORDER_APPEAR_ANIMATION : string = 'border 500ms ease-out';
const BORDER_DISAPPEAR_ANIMATION : string = 'border 500ms ease-in, height 0ms 500ms, width 0ms 500ms';
const BORDER_NO_ANIMATION : string = 'none';

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.scss' ]
})
export class MapComponent {
  public activeDescription : number = -1;
  public highlightOverlayAnimation : string;
  @Input() public map : MyMap;
  @Input() public excludeLinks : LinkLocation[];

  public toggle(i : number) : void {
    if (this.activeDescription === i) {
      this.highlightOverlayAnimation = BORDER_DISAPPEAR_ANIMATION;
    } else if (this.activeDescription === -1) {
      this.highlightOverlayAnimation = BORDER_APPEAR_ANIMATION;
    } else {
      this.highlightOverlayAnimation = BORDER_NO_ANIMATION;
    }
    this.activeDescription = this.activeDescription === i ? -1 : i;
  }

  public descriptionMaxHeightValue(highlight : MapHighlight) : string {
    let num : number = this.isUpwards(highlight)
      ? this.descriptionTopNumber(highlight)
      : (100 - this.descriptionTopNumber(highlight));
    return 'calc(' + num + '% - ' + DOUBLE_MARGIN + ')';

  }

  public descriptionTopValue(highlight : MapHighlight) : string {
    return this.isUpwards(highlight) ? 'auto' : this.descriptionTopNumber(highlight) + '%';
  }

  public descriptionBottomValue(highlight : MapHighlight) : string {
    return this.isUpwards(highlight) ? 100 - this.descriptionTopNumber(highlight) + '%' : 'auto';
  }

  private descriptionTopNumber(highlight : MapHighlight) {
    let top = highlight.location.top;
    let heightOffset = highlight.size.y / 2;
    return (top + (this.isUpwards(highlight) ? -heightOffset : heightOffset));
  }

  /**
   * True if the description box of the highlight should be in the upper half of the map (with the nose pointing down)
   */
  private isUpwards(highlight : MapHighlight) {
    return highlight.location.top > 50;
  }
}
