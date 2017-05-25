import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';
import { WorldPage } from './pages/world/world.page';
import { PlayersPage } from './pages/players/players.page';
import { CityPage } from './pages/city/city.page';
import { MetaPage } from './pages/meta/meta.page';

const WORLD : string = 'welt';

export const FACTION_TITLE : string = 'Fraktionen';
export const FACTION_ROUTE : string = WORLD + '/fraktionen';

export const WORLD_GENERAL_TITLE : string = 'Allgemein';
export const WORLD_GENERAL_ROUTE : string = WORLD + '/allgemein';

export const CITY_1_TITLE : string = 'Ebrichsburg';
export const CITY_1_ROUTE : string = WORLD + '/ebrichsburg';

const PLAYERS : string = 'spieler';
export const PLAYERS_TITLE : string = 'Crew';
export const PLAYERS_ROUTE : string = PLAYERS + '/crew';

export const INTRO_TITLE : string = 'Meta';
export const INTRO_ROUTE : string = PLAYERS + '/meta';

export const ROUTES : Routes = [
  // PLAYERS
  {path: PLAYERS_ROUTE, component: PlayersPage, data: {title: PLAYERS_TITLE}},
  {path: INTRO_ROUTE, component: MetaPage, data: {title: INTRO_TITLE}},
  // WORLD
  {path: FACTION_ROUTE, component: FactionsPage, data: {title: FACTION_TITLE}},
  {path: WORLD_GENERAL_ROUTE, component: WorldPage, data: {title: WORLD_GENERAL_TITLE}},
  {path: CITY_1_ROUTE, component: CityPage, data: {title: CITY_1_TITLE}},
  // Fallback
  {path: '**', redirectTo: PLAYERS_ROUTE}
];
