import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {Schema} from './schema';

@Injectable()
export class SchemaSearchService {

  constructor(private http: Http) {
  }

  search(term: string): Observable<Schema[]> {
    return this.http
      .get(`http://hjbedwj2geremgay2.stoplight-proxy.io/organizations/blah/schemas?name=${term}`)
      .map((res: Response) => res.json() as Schema[]);
  }
}

// private schemataUrl = 'http://hjbedwj2geremgay2.stoplight-proxy.io/organizations/blah/schemas' //'api/schemata';  // URL to web api

