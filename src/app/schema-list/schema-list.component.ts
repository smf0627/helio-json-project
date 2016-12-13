import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Schema } from '../schema';
import { SchemaService } from '../schema.service';



@Component({
  selector: 'app-schema-list',
  templateUrl: 'schema-list.component.html',
  styleUrls: ['schema-list.component.css'],
  providers: [SchemaService]
})



export class SchemaListComponent implements OnInit {

  title = 'Tour of JSON';
  schemata: Schema[];
  // schemata = SCHEMATA;
  selectedSchema: Schema;

  constructor(
    private router: Router,
    private schemaService: SchemaService) { }

  getSchemata(): void {
    this.schemaService.getSchemata().then(schemata => this.schemata = schemata);
  }

  ngOnInit(): void {
    this.getSchemata();
  }

  onSelectSchema(schema: Schema): void {
    this.selectedSchema = schema;
  }

  /*onAddJsonClick() {
    this.selectedSchema = new Schema('', '');
  }*/

  /*onAddJson(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.schemaService.create(name)
      .then(schema => {
        this.schemata.push(schema);
        this.selectedSchema = null;
      });
  }*/

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedSchema.name]);
  }

  onAddSchema(name: string): void {
   name = name.trim();
   if (!name) { return; }
   console.log(name);
   //SCHEMATA.push(Schema.name); // Not right
   }

}
