import { Component, Input, ViewChild } from '@angular/core';
import { Achievement } from '../../../data/models/achievement';
import { ExpandableComponent } from '../expandables/expandable.component';

@Component({
  selector: 'achievements',
  templateUrl: 'achievements.component.html',
  styleUrls: [ 'achievements.component.scss' ]
})
export class AchievementsComponent {

  public achievementsToDisplay : Achievement[][];
  @ViewChild(ExpandableComponent) private expandable : ExpandableComponent;
  // The number for the CSS transformation of the slider
  private translate : number = 0;
  private _allAchievements : Achievement[];
  private _maxAmount : number = 5;

  @Input()
  public set achievements(a : Achievement[]) {
    this._allAchievements = a;
    this.updateAchievementsToDisplay();
  };

  @Input() set maxAmount(a : number) {
    this._maxAmount = a;
    this.updateAchievementsToDisplay();
  }

  get translateValue() : string {
    return 'translateX(' + this.translate + '%)';
  }

  get translateStep() : number {
    return 100 / this.achievementsToDisplay.length;
  }

  get previousAvailable() : boolean {
    return this.expandable.visible && this.translate < 0;
  }

  get nextAvailable() : boolean {
    return this.expandable.visible && this.translate > -100 + this.translateStep;
  }

  get isVisible() {
    return this.expandable.visible;
  }

  public next() : void {
    if (this.nextAvailable) {
      this.translate -= this.translateStep;
    }
  }

  public previous() : void {
    if (this.previousAvailable) {
      this.translate += this.translateStep;
    }
  }

  public toggle() : void {
    this.expandable.visible = !this.expandable.visible;
  }

  private updateAchievementsToDisplay() : void {
    this.achievementsToDisplay =
      this._allAchievements.reduce((rows, key, index) =>
      (index % this._maxAmount === 0 ? rows.push([ key ]) : rows[ rows.length - 1 ].push(key)) && rows, []);
  }
}
