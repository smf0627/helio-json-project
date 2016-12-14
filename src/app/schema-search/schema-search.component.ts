import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {Observable}        from 'rxjs/Observable';
import {Subject}           from 'rxjs/Subject';

import {SchemaSearchService} from '../schema-search.service';
import {Schema} from '../schema';


@Component({
  selector: 'app-schema-search',
  templateUrl: './schema-search.component.html',
  styleUrls: ['./schema-search.component.css'],
  providers: [SchemaSearchService]
})
export class SchemaSearchComponent implements OnInit {

  schemata: Observable<Schema[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private schemaSearchService: SchemaSearchService,
    private router: Router
  ) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.schemata = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.schemaSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Schema[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Schema[]>([]);
      });
  }

  goToDetail(schema: Schema): void {
    this.router.navigate(['/detail', schema.name]);
  }

}
