import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';
import { WorldPage } from './pages/world/world.page';
import { PlayersPage } from './pages/players/players.page';
import { CityPage } from './pages/city/city.page';

export const FACTION_ROUTE : string = 'fraktionen';
export const WORLD_ROUTE : string = 'welt';
export const PLAYERS_ROUTE : string = 'spieler';
export const CITY_1_ROUTE : string = 'ebrichsburg';

export const ROUTES : Routes = [
  {path: '', component: PlayersPage, data: {title: 'Lost Colonies'}},
  {path: FACTION_ROUTE, component: FactionsPage, data: {title: 'Factions'}},
  {path: WORLD_ROUTE, component: WorldPage, data: {title: 'World'}},
  {path: PLAYERS_ROUTE, component: PlayersPage, data: {title: 'Players'}},
  {path: CITY_1_ROUTE, component: CityPage, data: {title: 'Ebrichsburg'}}
];
