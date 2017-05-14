import { LinkEntry } from './insertLinks.directive';
import { FACTION_ROUTE, WORLD_ROUTE } from '../../app.routes';

export const LINKS : LinkEntry[] = [
  // ----------------------------------------- FACTIONS
  {
    phrase: 'Speer und Hammer',
    link: FACTION_ROUTE, linkable: 'Speer und Hammer'
  }, {
    phrase: 'Nachtwächter',
    link: FACTION_ROUTE, linkable: 'Nachtwächter'
  }, {
    phrase: 'Brennende Dämmerung',
    link: FACTION_ROUTE, linkable: 'Brennende Dämmerung'
  }, {
    phrase: 'Schädelschänder',
    link: FACTION_ROUTE, linkable: 'Schädelschänder'
  }, {
    phrase: 'Kinder des Nebels',
    link: FACTION_ROUTE, linkable: 'Kinder des Nebels'
  },
  // ----------------------------------------- World
  // ---- Regierung
  {
    phrase: 'Adeptus Administratum',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Adeptus Arbites',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Kommissare',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Astra Militarum',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Adeptus Astra Telephatica',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Adeptus Mechnicus',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Adeptus Ministorum',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Inquisition',
    link: WORLD_ROUTE, linkable: 'regierung'
  }, {
    phrase: 'Freihändler',
    link: WORLD_ROUTE, linkable: 'regierung'
  },
  // ---- Technologie
  {
    phrase: 'Maschinengeist',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Adeptus Mechanicus',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Maschinenpriester',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Fabrik',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Produktion',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Defekt',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Reperatur',
    link: WORLD_ROUTE, linkable: 'technologie'
  }, {
    phrase: 'Leviathanblut',
    link: WORLD_ROUTE, linkable: 'technologie'
  },
  // ---- Religion
  {
    phrase: 'Imperiales Credo',
    link: WORLD_ROUTE, linkable: 'religion'
  }, {
    phrase: 'Maschinenkult',
    link: WORLD_ROUTE, linkable: 'religion'
  }, {
    phrase: 'Kulte',
    link: WORLD_ROUTE, linkable: 'religion'
  }, {
    phrase: 'Psioniker',
    link: WORLD_ROUTE,
    linkable: 'warp'
  }
];
