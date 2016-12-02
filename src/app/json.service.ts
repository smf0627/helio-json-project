import { Injectable } from '@angular/core';

import { Json } from './json';
import { JSONS } from './mock-jsons';

@Injectable()
export class JsonService {

  getJsons(): Promise<Json[]> {
    return Promise.resolve(JSONS);
  }

  /*
  create(name: string): Promise<Json> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  */
}
