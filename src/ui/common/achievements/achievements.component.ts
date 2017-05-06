import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { Achievement } from '../../../data/models/achievement';
import { ExpandableComponent } from '../expandables/expandable.component';

@Component({
  selector: 'achievements',
  templateUrl: 'achievements.component.html',
  styleUrls: [ 'achievements.component.scss' ]
})
export class AchievementsComponent {
  @Input() public achievements : Achievement[];
  @ViewChildren(ExpandableComponent) private expandables : QueryList<ExpandableComponent>;
  @Input() public maxAmount : number = 3;
  private translate : number = 0;

  get achievementsToDisplay() : Achievement[][] {
    return this.achievements
      .reduce((rows, key, index) =>
      (index % this.maxAmount === 0 ? rows.push([ key ]) : rows[ rows.length - 1 ].push(key)) && rows, []);
  }

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
    console.log(this.expandables);
    this.expandables.toArray().forEach((value) => value.visible = !value.visible);
  }
}
