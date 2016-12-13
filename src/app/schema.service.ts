import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

//import { Schema } from './schema';
//import { SCHEMATA } from './mock-schemata';

@Injectable()
export class SchemaService {

  private schemataUrl = 'http://hjbedwj2geremgay2.stoplight-proxy.io/organizations/blah/schemas' //'api/schemata';  // URL to web api

  constructor(private http: Http) { }

  getSchemata(): Promise<any> {
    return this.http.get(this.schemataUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSchema(id: number): Promise<any> {
    const url = `${this.getSchemata()}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  /* From Routing
  getSchemata(): Promise<Schema[]> {
    return Promise.resolve(SCHEMATA);
  }

  getSchema(id: number): Promise<Schema> {
    return this.getSchemata()
      .then(schemata => schemata.find(schema => schema.id === id));
  }
  */

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
