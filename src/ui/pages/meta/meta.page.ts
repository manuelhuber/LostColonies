import { Component } from '@angular/core';
import { MetaEntry } from '../../../data/models/metaEntry';
import { META_ROUTE } from '../../app.routes';
import { MetaService } from '../../../data/services/meta.service';

@Component({
  selector: 'metaPage',
  templateUrl: 'meta.page.html'
})
export class MetaPage {
  public entries : MetaEntry[];
  public path : string = META_ROUTE;

  constructor(meta : MetaService) {
    meta.getMeta().subscribe((entries : MetaEntry[]) => this.entries = entries);
  }

}
