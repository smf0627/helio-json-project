import { Injectable } from '@angular/core';

import { Schema } from './schema';
import { SCHEMATA } from './mock-schemata';

@Injectable()
export class SchemaService {

  getSchemata(): Promise<Schema[]> {
    return Promise.resolve(SCHEMATA);
  }

  /*
  create(name: string): Promise<Schema> {
    return this.http
      .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.schema().data)
      .catch(this.handleError);
  }
  */
}
