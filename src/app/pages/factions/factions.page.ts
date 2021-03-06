import { Component, OnInit } from '@angular/core';
import { FactionService } from '../../../data/services/faction.service';
import { Faction } from '../../../data/models/faction';
import { ActivatedRoute } from '@angular/router';
import { FACTION_ROUTE } from '../../app.routes.model';
import { LinkLocation } from '../../directive/insertLinks/insertLinks.directive';

export const FACTION_PARAM = 'group';
export const ALL_GROUPS = 'Alle';

@Component({
  selector: 'lc-factions',
  templateUrl: 'factions.page.html',
  styleUrls: [ 'factions.page.scss' ],
})
export class FactionsPage implements OnInit {

  // A list of all groups, including an ALL option
  public selectableGroups: string[];
  // Contains all factions - just a flattened version of "groups"
  public allFactions: Faction[];
  // The current selected group
  public group: Faction[];
  public showSelect: boolean;
  private groups: { [ group: string ]: Faction[] };
  private _activeGroup: string;

  private factionSorter: (a: Faction, b: Faction) => number = (a, b) => a.name.localeCompare(b.name);

  constructor(private factionService: FactionService, private activatedRoute: ActivatedRoute) {
    this.activeGroup = ALL_GROUPS;
    factionService.getFactions().subscribe((factions) => {
      this.groups = factions;
      this.allFactions = Object.keys(this.groups)
        .map((key) => this.groups[ key ])
        .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
        .sort(this.factionSorter);
      this.selectableGroups = [ ALL_GROUPS, ... Object.keys(factions) ];
      this.updateFactions();
    });

  }

  public hide(faction: Faction): boolean {
    return this.group.indexOf(faction) === -1;
  }

  public get activeGroup(): string {
    return this._activeGroup;
  }

  public set activeGroup(a: string) {
    this._activeGroup = a;
    this.updateFactions();
  }

  public ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
        const group: string = params[ FACTION_PARAM ];
        if (group) {
          this.activeGroup = group;
          this.updateFactions();
        }
      },
    );
  }

  public activateGroup(group: string): void {
    this.activeGroup = group;
    this.showSelect = false;
  }

  public excludeLinks(faction: Faction): LinkLocation[ ] {
    return [ {link: FACTION_ROUTE, linkable: faction.name} ];
  }

  private updateFactions(): void {
    if (!this.groups) {
      this.group = [];
    } else if (this.activeGroup && this.activeGroup !== ALL_GROUPS && this.groups[ this.activeGroup ]) {
      this.group = this.groups[ this.activeGroup ].sort(this.factionSorter);
    } else {
      this._activeGroup = ALL_GROUPS;
      this.group = this.allFactions;
    }
  }

}
