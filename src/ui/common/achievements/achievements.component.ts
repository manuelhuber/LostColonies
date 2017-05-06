import { Component, Input, ViewChild } from '@angular/core';
import { Achievement } from '../../../data/models/achievement';
import { ExpandableComponent } from '../expandables/expandable.component';

@Component({
  selector: 'achievements',
  templateUrl: 'achievements.component.html',
  styleUrls: [ 'achievements.component.scss' ]
})
export class AchievementsComponent {
  @Input()
  public set achievements(a : Achievement[]) {
    this.achievementsToDisplay =
      a.reduce((rows, key, index) =>
      (index % this.maxAmount === 0 ? rows.push([ key ]) : rows[ rows.length - 1 ].push(key)) && rows, []);
  };

  @Input() public maxAmount : number = 5;
  public achievementsToDisplay : Achievement[][];
  @ViewChild(ExpandableComponent) private expandable : ExpandableComponent;
  private translate : number = 0;

  get translateValue() : string {
    return 'translateX(' + this.translate + '%)';
  }

  get translateStep() : number {
    return 100 / this.achievementsToDisplay.length;
  }

  get showLeft() : boolean {
    return this.translate < 0;
  }

  get showRight() : boolean {
    return this.translate > -100 + this.translateStep;
  }

  public swipeLeft() : void {
    this.translate += this.translateStep;

  }

  public swipeRight() : void {
    this.translate -= this.translateStep;

  }

  public toggle() : void {
    this.expandable.visible = !this.expandable.visible;
  }
}
