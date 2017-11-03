import { LinkEntry } from './insertLinks.directive';
import { CITY_1_ROUTE, CREW_1_ROUTE, FACTION_ROUTE, INTRO_ROUTE, WORLD_GENERAL_ROUTE } from '../../app.routes';

export const LINKS : LinkEntry[] = [
  // ----------------------------------------------------------------------------------------------------------- CREW 1
  // ----------------------------------------------------------------------------------------------- gang
  {phrase: 'Angler', link: CREW_1_ROUTE, linkable: 'Die Angler'},
  {phrase: 'Salia', link: CREW_1_ROUTE, linkable: 'Die Angler'},
  {phrase: 'Melvir', link: CREW_1_ROUTE, linkable: 'Die Angler'},
  // ----------------------------------------------------------------------------------------------- characters
  {phrase: 'Yuri', link: CREW_1_ROUTE, linkable: 'Yuri'},
  {phrase: 'Erik', link: CREW_1_ROUTE, linkable: 'Erik'},
  {phrase: 'Frank', link: CREW_1_ROUTE, linkable: 'Dietrich'},
  {phrase: 'Dietrich', link: CREW_1_ROUTE, linkable: 'Dietrich'},
  // --------------------------------------------------------------------------------------------------------- FACTIONS
  {phrase: /(Speer und Hammer|S&H)/i, link: FACTION_ROUTE, linkable: 'Speer und Hammer'},
  {phrase: /(Nachtwächter|NW)/i, link: FACTION_ROUTE, linkable: 'Nachtwächter'},
  {phrase: 'Don Volker', link: FACTION_ROUTE, linkable: 'Nachtwächter'},
  {phrase: 'Halger', link: FACTION_ROUTE, linkable: 'Nachtwächter'},
  {phrase: /(Brennende[n]? Dämmerung|BD)/i, link: FACTION_ROUTE, linkable: 'Brennende Dämmerung'},
  {phrase: 'Schädelschänder', link: FACTION_ROUTE, linkable: 'Schädelschänder'},
  {phrase: 'Kinder des Nebels', link: FACTION_ROUTE, linkable: 'Kinder des Nebels'},
  {phrase: 'Diebesschöpfer', link: FACTION_ROUTE, linkable: 'Kinder des Nebels'},
  {phrase: 'Adeptus Arbites', link: FACTION_ROUTE, linkable: 'Adeptus Arbites'},
  {phrase: /Blaum[aä]ntel[a-z]?/, link: FACTION_ROUTE, linkable: 'Adeptus Arbites'},
  {phrase: 'Regulator Zimmer', link: FACTION_ROUTE, linkable: 'Adeptus Arbites'},
  {phrase: 'Astra Militarum', link: FACTION_ROUTE, linkable: 'Astra Militarum'},
  {phrase: /Grünhelm[e]?/, link: FACTION_ROUTE, linkable: 'Astra Militarum'},
  {phrase: 'Celene', link: FACTION_ROUTE, linkable: 'Astra Militarum'},
  // ------------------------------------------------------------------------------------------------------------ WORLD
  // ----------------------------------------------------------------------------------------------- Regierung
  {phrase: 'Adeptus Administratum', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Arbites', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Kommissar', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Astra Militarum', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Astra Telephatica', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Mechnicus', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Adeptus Ministorum', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Inquisition', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  {phrase: 'Freihändler', link: WORLD_GENERAL_ROUTE, linkable: 'regierung'},
  // ----------------------------------------------------------------------------------------------- Technologie
  {phrase: 'Maschinengeist', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Adeptus Mechanicus', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Maschinenpriester', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Fabrik', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Produktion', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Defekt', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Reperatur', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  {phrase: 'Leviathanblut', link: WORLD_GENERAL_ROUTE, linkable: 'technologie'},
  // ----------------------------------------------------------------------------------------------- Religion
  {phrase: 'Imperiales Credo', link: WORLD_GENERAL_ROUTE, linkable: 'religion'},
  {phrase: 'Maschinenkult', link: WORLD_GENERAL_ROUTE, linkable: 'religion'},
  // "Kult" but not "Kultur"
  {phrase: /Kult(?!ur)/i, link: WORLD_GENERAL_ROUTE, linkable: 'religion'},
  {phrase: 'Psioniker', link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  // ----------------------------------------------------------------------------------------------- Warp
  // "Warp" not followed by R, S or E
  {phrase: /Warp(?![rse])/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Warpriss[e]?/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Warpst[uü]rm[e]/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Warpeinfl[uü]ß[e]?/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: 'Echtzeitraum', link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: 'Whisperer', link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: 'Psioniker', link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: 'Todessucher', link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Leiche[n]?/, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Dämon(en)?/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  {phrase: /Leviathan[^b]/i, link: WORLD_GENERAL_ROUTE, linkable: 'warp'},
  // ------------------------------------------------------------------------------------------------------ EBRICHSBURG
  {phrase: 'Doskvol', link: CITY_1_ROUTE, linkable: 'dokvol'},
  // ----------------------------------------------------------------------------------------------- Maps Hasard
  {phrase: /Hasard[s]?/, link: CITY_1_ROUTE, linkable: 'hasard'},
  {phrase: 'Kasino', link: CITY_1_ROUTE, linkable: 'hasard', mapHighlight: 'Volker Kasino'},
  {phrase: 'Fish\'n\'Things', link: CITY_1_ROUTE, linkable: 'hasard', mapHighlight: 'Fish\'n\'Things'},
  // ----------------------------------------------------------------------------------------------- Meta
  {phrase: /Inspiration(en)?/, link: INTRO_ROUTE, linkable: 'Inspiration'},
  {phrase: 'Charakterbeschreibung', link: INTRO_ROUTE, linkable: 'Charaktere'}
];
