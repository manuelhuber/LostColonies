import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';

export const ROUTES: Routes = [
  {path: '', component: FactionsPage, data: {title: 'Lost Colonies'}},
  {path: 'factions', component: FactionsPage, data: {title: 'Factions'}}
];
