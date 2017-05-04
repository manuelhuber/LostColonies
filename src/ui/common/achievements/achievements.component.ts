import { Component, Input } from '@angular/core';
import { Achievement } from '../../../data/models/achievement';

@Component({
  selector: 'achievements',
  templateUrl: 'achievements.component.html'
})
export class AchievementsComponent {
  @Input() public achievements : Achievement[];
  public showMore : boolean;
}
