import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { World } from '../models/world';
import { HttpClient } from '@angular/common/http';

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

  public getDoskvol() {
    return this.http.get('/assets/data/doskvol.json');
  }
}
