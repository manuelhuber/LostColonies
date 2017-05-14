import { HammerGestureConfig } from '@angular/platform-browser';
export class MyHammerConfig extends HammerGestureConfig {
  public overrides = <any> {
    pinch: {enable: false},
    rotate: {enable: false}
  };
}
