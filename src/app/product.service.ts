import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';

import { Album } from './album';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  getAlbum(id: number): Observable<Album> {

    return this._http.get(this._albumUrl).pipe(
      map(response => <Album>(response.json()))
    );

  }

}
