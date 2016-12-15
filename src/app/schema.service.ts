import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Schema } from './schema';
//import { SCHEMATA } from './mock-schemata';

@Injectable()
export class SchemaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private  schemataUrl = 'http://localhost:4000/v1/schemata';
  //private schemataUrl = 'http://hjbedwj2geremgay2.stoplight-proxy.io/organizations/blah/schemas' //'api/schemata';  // URL to web api

  constructor(private http: Http) { }

  getSchemata(): Promise<any> {
    return this.http.get(this.schemataUrl)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  getSchema(id): Promise<any> {
    const url = `${this.schemataUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  createSchema(schema): Promise<any> {
    console.log(schema);
    return this.http
      .post(this.schemataUrl, schema)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  updateSchema(schema: Schema): Promise<any> {
    const url = `${this.schemataUrl}/${schema._id}`;
    const copy = JSON.parse(JSON.stringify(schema));
    if(copy._id) {
      delete copy._id;
    }

    return this.http
      .put(url, JSON.stringify(copy), {headers: this.headers})
      .toPromise()
      .then(() => schema)
      .catch(this.handleError);
  }

  deleteSchema(_id): Promise<void> {
    const url = `${this.schemataUrl}/${_id}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
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
