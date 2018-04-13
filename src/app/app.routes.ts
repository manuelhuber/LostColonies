import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';
import { WorldPage } from './pages/world/world.page';
import { CrewPage } from './pages/crew/crew.page';
import { CityPage } from './pages/city/city.page';
import { MetaPage } from './pages/meta/meta.page';
import {
  CITY_1_ROUTE,
  CITY_1_TITLE,
  CREW_1_ROUTE,
  CREW_1_TITLE,
  CREW_2_ROUTE,
  CREW_2_TITLE,
  FACTION_ROUTE,
  FACTION_TITLE,
  INTRO_ROUTE,
  INTRO_TITLE,
  WORLD_GENERAL_ROUTE,
  WORLD_GENERAL_TITLE
} from './app.routes.model';


export const ROUTES: Routes = [
  // PLAYERS
  {path: INTRO_ROUTE, component: MetaPage, data: {title: INTRO_TITLE}},
  {path: CREW_1_ROUTE, component: CrewPage, data: {title: CREW_1_TITLE, path: CREW_1_ROUTE}},
  {path: CREW_2_ROUTE, component: CrewPage, data: {title: CREW_2_TITLE, path: CREW_2_ROUTE}},
  // WORLD
  {path: FACTION_ROUTE, component: FactionsPage, data: {title: FACTION_TITLE}},
  {path: WORLD_GENERAL_ROUTE, component: WorldPage, data: {title: WORLD_GENERAL_TITLE}},
  {path: CITY_1_ROUTE, component: CityPage, data: {title: CITY_1_TITLE}},
  // Fallback
  {path: '**', redirectTo: INTRO_ROUTE}
];
