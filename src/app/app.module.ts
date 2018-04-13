import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';

import 'hammerjs';
import 'hammer-timejs';
import '../rxjs-imports';

import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ExpandableHeaderComponent } from './components/expandables/header/expandable-header.component';
import { ExpandableComponent } from './components/expandables/expandable.component';
import { ExpandableContentComponent } from './components/expandables/content/expandable-content.component';
import { FactionsPage } from './pages/factions/factions.page';
import { HeaderComponent } from './components/header/header.component';
import { FactionService } from '../data/services/faction.service';
import { WorldPage } from './pages/world/world.page';
import { WorldService } from '../data/services/world.service';
import { CrewService } from '../data/services/crew.service';
import { CrewPage } from './pages/crew/crew.page';
import { AchievementComponent } from './components/achievements/entry/achievement.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { CharacterComponent } from './components/character/character.component';
import { CityPage } from './pages/city/city.page';
import { MapComponent } from './components/map/map.component';
import { GangComponent } from './components/gang/gang.component';
import { SessionsComponent } from './components/sessions/sessions.component';
import { LinkableDirective } from './directive/linkable/linkable.directive';
import { InsertLinksDirective } from './directive/insertLinks/insertLinks.directive';
import { MyHammerConfig } from '../hammer.conf';
import { NpcComponent } from './components/npcs/entry/npc.component';
import { NpcsComponent } from './components/npcs/npcs.component';
import { MetaPage } from './pages/meta/meta.page';
import { MetaService } from '../data/services/meta.service';

// Application wide providers
const APP_PROVIDERS = [
  FactionService,
  WorldService,
  CrewService,
  MetaService
];

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    FactionsPage,
    WorldPage,
    CrewPage,
    CityPage,
    MetaPage,
    AppComponent,
    HeaderComponent,
    AccordionComponent,
    ExpandableComponent,
    ExpandableHeaderComponent,
    ExpandableContentComponent,
    AchievementComponent,
    AchievementsComponent,
    CharacterComponent,
    MapComponent,
    GangComponent,
    SessionsComponent,
    LinkableDirective,
    InsertLinksDirective,
    NpcComponent,
    NpcsComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    APP_PROVIDERS,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    },
    {
      provide: LOCALE_ID,
      useValue: 'de-DE'
    }

  ]
})
export class AppModule {
}
