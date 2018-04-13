import { AfterContentInit, Component, Input } from '@angular/core';
import { MyMap } from '../../../data/models/map';
import { MapHighlight } from '../../../data/models/MapHighlight';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

// MAGIC NUMBER WARNING: This value is dependent on the margin in the map.component.scss
const DOUBLE_MARGIN = '20px';
const BORDER_APPEAR_ANIMATION = 'border 500ms ease-out';
const BORDER_DISAPPEAR_ANIMATION = 'border 500ms ease-in, height 0ms 500ms, width 0ms 500ms, transform 500ms';
const BORDER_NO_ANIMATION = 'transform 500ms';

@Component({
  selector: 'map',
  templateUrl: 'map.component.html',
  styleUrls: [ 'map.component.scss' ]
})
export class MapComponent implements AfterContentInit {
  public activeDescription = -1;
  public highlightOverlayAnimation: string;
  @Input() public map: MyMap;
  @Input() public excludeLinks: LinkLocation[];
  @Input() public autoHighlight: string;

  get activeHighlight(): MapHighlight {
    return this.map.highlights[ this.activeDescription ];
  }

  get overlayWrapperStyle(): any {
    if (this.activeDescription !== -1) {
      return {
        top: this.activeHighlight.location.top + '%',
        left: this.activeHighlight.location.left + '%',
        width: this.activeHighlight.size.x + '%',
        height: this.activeHighlight.size.y + '%'
      };
    } else {
      return {
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%'
      };
    }
  }

  get overlayStyle(): any {
    if (this.activeDescription !== -1) {
      return {
        transform: 'rotate(' + this.activeHighlight.size.rotation + 'deg)',
        transition: this.highlightOverlayAnimation
      };
    } else {
      return {
        transform: 'rotate(0deg)',
        transition: this.highlightOverlayAnimation
      };
    }

  }

  public ngAfterContentInit(): void {
    this.highlight(this.autoHighlight);
  }

  public highlight(name: string): void {
    if (!this.map || !this.map.highlights) {
      return;
    }
    const target: MapHighlight = this.map.highlights.find((value: MapHighlight) => value.name === name);
    this.toggle(this.map.highlights.indexOf(target));
  }

  public toggle(i: number): void {
    if (this.activeDescription === i) {
      this.highlightOverlayAnimation = BORDER_DISAPPEAR_ANIMATION;
    } else if (this.activeDescription === -1) {
      this.highlightOverlayAnimation = BORDER_APPEAR_ANIMATION;
    } else {
      this.highlightOverlayAnimation = BORDER_NO_ANIMATION;
    }
    this.activeDescription = this.activeDescription === i ? -1 : i;
  }

  public descriptionMaxHeightValue(highlight: MapHighlight): string {
    const num: number = this.isUpwards(highlight)
      ? this.descriptionTopNumber(highlight)
      : (100 - this.descriptionTopNumber(highlight));
    return 'calc(' + num + '% - ' + DOUBLE_MARGIN + ')';

  }

  public descriptionTopValue(highlight: MapHighlight): string {
    return this.isUpwards(highlight) ? 'auto' : this.descriptionTopNumber(highlight) + '%';
  }

  public descriptionBottomValue(highlight: MapHighlight): string {
    return this.isUpwards(highlight) ? 100 - this.descriptionTopNumber(highlight) + '%' : 'auto';
  }

  public getLocationAndSize(highlight: MapHighlight): any {
    return {
      top: highlight.location.top + '%',
      left: highlight.location.left + '%',
      width: highlight.size.x + '%',
      height: highlight.size.y + '%'
    };
  }

  private descriptionTopNumber(highlight: MapHighlight) {
    const top = highlight.location.top;
    const heightOffset = highlight.size.y / 2;
    return (top + (this.isUpwards(highlight) ? -heightOffset : heightOffset));
  }

  /**
   * True if the description box of the highlight should be in the upper half of the map (with the nose pointing down)
   */
  private isUpwards(highlight: MapHighlight) {
    return highlight.location.top > 50;
  }
}
