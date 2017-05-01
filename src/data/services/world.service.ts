import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { WorldEntry } from '../models/world';

@Injectable()
export class WorldService {

  private world : Observable<WorldEntry[]>;

  constructor(private http : Http) {
  }

  public getWorld() : Observable<WorldEntry[]> {
    if (this.world === undefined) {
      this.world = this.http.get('/assets/data/world.json').map((res) => res.json());
    }
    return this.world;
  }
}
