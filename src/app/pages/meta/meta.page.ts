import { Component } from '@angular/core';
import { MetaEntry } from '../../../data/models/metaEntry';
import { INTRO_ROUTE } from '../../app.routes.model';
import { MetaService } from '../../../data/services/meta.service';

@Component({
  selector: 'lc-meta-page',
  templateUrl: 'meta.page.html',
})
export class MetaPage {
  public entries: MetaEntry[];
  public path: string = INTRO_ROUTE;

  constructor(meta: MetaService) {
    meta.getMeta().subscribe((entries: MetaEntry[]) => this.entries = entries);
  }

}
