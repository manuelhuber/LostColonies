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
import { AccordionHeaderComponent } from './common/accordion/entry/header/accordion-header.component';
import { AccordionEntryComponent } from './common/accordion/entry/accordion-entry.component';
import { AccordionContentComponent } from './common/accordion/entry/content/accordion-content.component';
import { FactionsPage } from './pages/factions/factions.page';
import { HeaderComponent } from './header/header.component';
import { FactionService } from '../data/services/faction.service';
import { WorldPage } from './pages/world/world.page';
import { WorldService } from '../data/services/world.service';

// Application wide providers
const APP_PROVIDERS = [
  FactionService,
  WorldService
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
    AppComponent,
    HeaderComponent,
    AccordionComponent,
    AccordionEntryComponent,
    AccordionHeaderComponent,
    AccordionContentComponent
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
