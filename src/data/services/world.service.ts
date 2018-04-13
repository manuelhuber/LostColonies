import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { World } from '../models/world';
import { HttpClient } from '@angular/common/http';
import { HighlightMap } from '../models/map';

@Injectable()
export class WorldService {

  private world: Observable<World>;

  constructor(private http: HttpClient) {
  }

  public getWorld(): Observable<World> {
    if (this.world === undefined) {
      this.world = <Observable<World>>this.http.get('/assets/data/world.json');
    }
    return this.world;
  }

  public getDoskvol(): Observable<HighlightMap[]> {
    return <Observable<HighlightMap[]>>this.http.get('/assets/data/doskvol.json');
  }
}
