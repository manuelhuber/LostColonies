import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MetaEntry } from '../models/metaEntry';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MetaService {

  private entries: Observable<MetaEntry[]>;

  constructor(private http: HttpClient) {
  }

  public getMeta(): Observable<any> {
    if (this.entries === undefined) {
      this.entries = <Observable<MetaEntry[]>>this.http.get('/assets/data/meta.json');
    }
    return this.entries;
  }
}
