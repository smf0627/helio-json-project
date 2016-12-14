import 'rxjs/add/operator/switchMap';
import {Component, OnInit, Input} from '@angular/core';
//import { Component, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

import {SchemaService} from '../schema.service';
import {Schema} from '../schema';


@Component({
  //moduleId: module.id,
  selector: 'app-schema-detail',
  templateUrl: 'schema-detail.component.html',
  styleUrls: ['schema-detail.component.css']
})
export class SchemaDetailComponent implements OnInit {
  @Input()
  schema: any;

  constructor(private schemaService: SchemaService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.schemaService.getSchema(params['name']))
      .subscribe(schema => this.schema = schema);
  }

  onSaveSchema(): void {
    this.schemaService.updateSchema(this.schema)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }


}
