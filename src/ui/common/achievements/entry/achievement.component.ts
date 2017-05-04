import { Component, Input } from '@angular/core';
import { Achievement } from '../../../../data/models/achievement';

@Component({
  selector: 'achievement',
  templateUrl: 'achievement.component.html',
  styleUrls: [ 'achievement.component.scss' ]
})
export class AchievementComponent {
  @Input() public achievement : Achievement;
}
