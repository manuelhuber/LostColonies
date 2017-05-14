import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';
import { WorldPage } from './pages/world/world.page';
import { PlayersPage } from './pages/players/players.page';
import { CityPage } from './pages/city/city.page';
export const FACTION_ROUTE : string = 'fraktionen';
export const ROUTES : Routes = [
  {path: '', component: PlayersPage, data: {title: 'Lost Colonies'}},
  {path: FACTION_ROUTE, component: FactionsPage, data: {title: 'Factions'}},
  {path: 'world', component: WorldPage, data: {title: 'World'}},
  {path: 'players', component: PlayersPage, data: {title: 'Players'}},
  {path: 'ebrichsburg', component: CityPage, data: {title: 'Ebrichsburg'}}
];
