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
  // @Input() public maxAmount : number = 50;
  //
  // get achievementsToDisplay() : Achievement[][] {
  //   return this.achievements
  //     .reduce((rows, key, index) =>
  //     (index % this.maxAmount === 0 ? rows.push([ key ]) : rows[ rows.length - 1 ].push(key)) && rows, []);
  // }
  //
  // get showLeft() : boolean {
  //   return true;
  // }
  //
  // get showRight() : boolean {
  //   return true;
  // }
  //
  // public swipeLeft() : void {
  // }
  //
  // public swipeRight() : void {
  // }

  public toggle() : void {
    this.expandables.toArray().forEach((value) => value.visible = !value.visible);
  }
}
