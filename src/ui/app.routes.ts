import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';
import { WorldPage } from './pages/world/world.page';
import { PlayersPage } from './pages/players/players.page';
import { CityPage } from './pages/city/city.page';
import { MetaPage } from './pages/meta/meta.page';

export const FACTION_ROUTE : string = 'fraktionen';
export const WORLD_ROUTE : string = 'welt';
export const PLAYERS_ROUTE : string = 'spieler';
export const CITY_1_ROUTE : string = 'ebrichsburg';
export const INTRO_ROUTE : string = 'intro';

export const ROUTES : Routes = [
  {path: FACTION_ROUTE, component: FactionsPage, data: {title: 'Fraktionen'}},
  {path: WORLD_ROUTE, component: WorldPage, data: {title: 'Welt'}},
  {path: PLAYERS_ROUTE, component: PlayersPage, data: {title: 'Spieler'}},
  {path: CITY_1_ROUTE, component: CityPage, data: {title: 'Ebrichsburg'}},
  {path: INTRO_ROUTE, component: MetaPage, data: {title: 'Intro'}},
  {path: '**', redirectTo: PLAYERS_ROUTE}
];
