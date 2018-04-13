import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'lc-app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [ 'app.component.scss', './pages/pages.scss' ],
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title) {
  }

  /**
   * Page title handler - code copied from official angular source
   */
  public ngOnInit(): void {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .filter((route) => route.outlet === 'primary')
      .mergeMap((route) => route.data)
      .subscribe((event) => this.titleService.setTitle(event[ 'title' ]));
  }
}
