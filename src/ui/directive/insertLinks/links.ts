import { LinkEntry } from './insertLinks.directive';
import { FACTION_ROUTE } from '../../app.routes';

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
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Adeptus Arbites',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Kommissare',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Astra Militarum',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Adeptus Astra Telephatica',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Adeptus Mechnicus',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Adeptus Ministorum',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Inquisition',
    link: 'world', linkable: 'regierung'
  }, {
    phrase: 'Freihändler',
    link: 'world', linkable: 'regierung'
  },
  // ---- Technologie
  {
    phrase: 'Maschinengeist',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Adeptus Mechanicus',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Maschinenpriester',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Fabrik',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Produktion',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Defekt',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Reperatur',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Leviathanblut',
    link: 'world', linkable: 'technologie'
  },
  // ---- Religion
  {
    phrase: 'Imperiales Credo',
    link: 'world', linkable: 'religion'
  }, {
    phrase: 'Maschinenkult',
    link: 'world', linkable: 'religion'
  }, {
    phrase: 'Kulte',
    link: 'world', linkable: 'religion'
  }, {
    phrase: 'Psioniker',
    link: 'world',
    linkable: 'warp'
  }
];
