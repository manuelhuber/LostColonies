import { Routes } from '@angular/router';
import { FactionsPage } from './pages/factions/factions.page';

export const ROUTES: Routes = [
  {path: '', component: FactionsPage},
  {path: 'factions', component: FactionsPage}
];
