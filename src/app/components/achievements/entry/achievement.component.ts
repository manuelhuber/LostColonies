import { Component, Input } from '@angular/core';
import { Achievement } from '../../../../data/models/achievement';

@Component({
  selector: 'lc-achievement',
  templateUrl: 'achievement.component.html',
  styleUrls: [ 'achievement.component.scss' ],
})
export class AchievementComponent {
  @Input() public achievement: Achievement;
  public expanded: boolean;
}
