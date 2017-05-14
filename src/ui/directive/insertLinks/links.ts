import { LinkEntry } from './insertLinks.directive';
import { CITY_1_ROUTE, FACTION_ROUTE, PLAYERS_ROUTE, WORLD_ROUTE } from '../../app.routes';

export const LINKS : LinkEntry[] = [
  // ----------------------------------------------------------------------------------------------------------- PLAYERS
  {phrase: 'Yuri', link: PLAYERS_ROUTE, linkable: 'Moritz'},
  {phrase: 'Erik', link: PLAYERS_ROUTE, linkable: 'Andi'},
  {phrase: 'Frank', link: PLAYERS_ROUTE, linkable: 'Flo'},
  {phrase: 'Dietrich', link: PLAYERS_ROUTE, linkable: 'Flo'},
  {phrase: 'Aurora', link: PLAYERS_ROUTE, linkable: 'Franny'},
  // ---------------------------------------------------------------------------------------------------------- FACTIONS
  {phrase: 'Speer und Hammer', link: FACTION_ROUTE, linkable: 'Speer und Hammer'},
  {phrase: 'Nachtwächter', link: FACTION_ROUTE, linkable: 'Nachtwächter'},
  {phrase: 'Brennende Dämmerung', link: FACTION_ROUTE, linkable: 'Brennende Dämmerung'},
  {phrase: 'Brennenden Dämmerung', link: FACTION_ROUTE, linkable: 'Brennende Dämmerung'},
  {phrase: 'Schädelschänder', link: FACTION_ROUTE, linkable: 'Schädelschänder'},
  {phrase: 'Kinder des Nebels', link: FACTION_ROUTE, linkable: 'Kinder des Nebels'},
  // ------------------------------------------------------------------------------------------------------------- World
  // ----------------------------------------------------------------------------------------------- Regierung
  {phrase: 'Adeptus Administratum', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Arbites', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Kommissar', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Astra Militarum', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Astra Telephatica', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Mechnicus', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Ministorum', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Inquisition', link: WORLD_ROUTE, linkable: 'regierung'},
  {phrase: 'Freihändler', link: WORLD_ROUTE, linkable: 'regierung'},
  // ----------------------------------------------------------------------------------------------- Technologie
  {phrase: 'Maschinengeist', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Adeptus Mechanicus', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Maschinenpriester', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Fabrik', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Produktion', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Defekt', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Reperatur', link: WORLD_ROUTE, linkable: 'technologie'},
  {phrase: 'Leviathanblut', link: WORLD_ROUTE, linkable: 'technologie'},
  // ----------------------------------------------------------------------------------------------- Religion
  {phrase: 'Imperiales Credo', link: WORLD_ROUTE, linkable: 'religion'},
  {phrase: 'Maschinenkult', link: WORLD_ROUTE, linkable: 'religion'},
  {phrase: 'Kult', link: WORLD_ROUTE, linkable: 'religion'},
  {phrase: 'Psioniker', link: WORLD_ROUTE, linkable: 'warp'},
  // ----------------------------------------------------------------------------------------------- Warp
  {phrase: 'Warp', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Echtzeitraum', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Riss', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Warpeinfluß', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Whisperer', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Psioniker', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Tote', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Leiche', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Todessucher', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Dämon', link: WORLD_ROUTE, linkable: 'warp'},
  {phrase: 'Leviathan', link: WORLD_ROUTE, linkable: 'warp'},
  // ------------------------------------------------------------------------------------------------------- Ebrichsburg
  {phrase: 'Ebrichsburg', link: CITY_1_ROUTE, linkable: 'ebrichsburg'},
  {phrase: 'Hasard', link: CITY_1_ROUTE, linkable: 'hasard'}

];
