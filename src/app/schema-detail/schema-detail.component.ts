import { Component, Input } from '@angular/core';

import { Schema } from '../schema';


@Component({
  selector: 'app-schema-detail',
  templateUrl: 'schema-detail.component.html',
  styleUrls: ['schema-detail.component.css']
})


export class SchemaDetailComponent {
/// export class SchemaDetailComponent implements OnInit {
  //constructor() { }

  @Input()
  schema: Schema;

  ngOnInit() {
  }


}
