import { LinkEntry } from './insertLinks.directive';

export function getData() : any {
  let foo : any = require('../../../assets/data/world');
  let result = [];
  foo.forEach((entry) => {
    entry.subEntries.forEach((subEntrie) => {
      result.push({
        phrase: subEntrie.title,
        link: 'world',
        linkable: entry.title
      });
      // if (subEntrie.subEntries) {
      //   subEntrie.subEntries.forEach((subSub) => {
      //     result.push({
      //       phrase: subSub.title,
      //       link: 'world',
      //       linkable: entry.title
      //     });
      //   });
      // }
    });
  });
  return result;
}

export const LINKS : LinkEntry[] = [
  // ----------------------------------------- FACTIONS
  {
    phrase: 'Speer und Hammer',
    link: 'factions', linkable: 'Speer und Hammer'
  }, {
    phrase: 'Nachtwächter',
    link: 'factions', linkable: 'Nachtwächter'
  }, {
    phrase: 'Brennende Dämmerung',
    link: 'factions', linkable: 'Brennende Dämmerung'
  }, {
    phrase: 'Schädelschänder',
    link: 'factions', linkable: 'Schädelschänder'
  }, {
    phrase: 'Kinder des Nebels',
    link: 'factions', linkable: 'Kinder des Nebels'
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
    phrase: 'Maschinengeister',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Adeptus Mechanicus',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Maschinenpriester',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Fabriken',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Produktion',
    link: 'world', linkable: 'technologie'
  }, {
    phrase: 'Defekte',
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
