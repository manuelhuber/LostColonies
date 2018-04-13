import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MetaEntry } from '../models/metaEntry';

@Injectable()
export class MetaService {

  private entries: Observable<MetaEntry[]>;

  constructor(private http: Http) {
  }

  public getMeta(): Observable<any> {
    if (this.entries === undefined) {
      this.entries = this.http.get('/assets/data/meta.json').map((res) => res.json());
    }
    return this.entries;
  }
}
