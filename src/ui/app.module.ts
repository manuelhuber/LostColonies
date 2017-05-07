import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { createInputTransfer, createNewHosts, removeNgStyles } from '@angularclass/hmr';
import { PreloadAllModules, RouterModule } from '@angular/router';
/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// App is our top level component
import { AppComponent } from './app.component';

import { AccordionComponent } from './common/accordion/accordion.component';
import { ExpandableHeaderComponent } from './common/expandables/header/expandable-header.component';
import { ExpandableComponent } from './common/expandables/expandable.component';
import { ExpandableContentComponent } from './common/expandables/content/expandable-content.component';
import { FactionsPage } from './pages/factions/factions.page';
import { HeaderComponent } from './header/header.component';
import { FactionService } from '../data/services/faction.service';
import { WorldPage } from './pages/world/world.page';
import { WorldService } from '../data/services/world.service';
import { PlayerService } from '../data/services/player.service';
import { PlayersPage } from './pages/players/players.page';
import { AchievementComponent } from './common/achievements/entry/achievement.component';
import { AchievementsComponent } from './common/achievements/achievements.component';
import { CharactersComponent } from './common/characters/characters.component';

// Application wide providers
const APP_PROVIDERS = [
  FactionService,
  WorldService,
  PlayerService
];

type StoreType = {
  restoreInputValues : () => void,
  disposeOldHosts : () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    FactionsPage,
    WorldPage,
    PlayersPage,
    AppComponent,
    HeaderComponent,
    AccordionComponent,
    ExpandableComponent,
    ExpandableHeaderComponent,
    ExpandableContentComponent,
    AchievementComponent,
    AchievementsComponent,
    CharactersComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ENV_PROVIDERS,
    APP_PROVIDERS
  ]
})
export class AppModule {

  constructor(public appRef : ApplicationRef) {
  }

  public hmrOnInit(store : StoreType) {
    if (!store) {
      return;
    }
    console.log('HMR store', JSON.stringify(store, null, 2));
    // set state
    // set input values
    if ('restoreInputValues' in store) {
      let restoreInputValues = store.restoreInputValues;
      setTimeout(restoreInputValues);
    }

    this.appRef.tick();
    delete store.restoreInputValues;
  }

  public hmrOnDestroy(store : StoreType) {
    const cmpLocation = this.appRef.components.map((cmp) => cmp.location.nativeElement);
    // recreate root elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // save input values
    store.restoreInputValues = createInputTransfer();
    // remove styles
    removeNgStyles();
  }

  public hmrAfterDestroy(store : StoreType) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }

}