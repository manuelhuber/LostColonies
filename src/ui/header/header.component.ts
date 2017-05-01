import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: 'header.component.html',
  encapsulation: ViewEncapsulation.Native,
  styleUrls: [ 'header.component.scss' ]
})
export class HeaderComponent {
  public menuOpen : boolean;
}
