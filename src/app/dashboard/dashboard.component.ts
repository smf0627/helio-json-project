import {Component, OnInit} from '@angular/core';

import {Schema} from '../schema';
import {SchemaService} from '../schema.service';

@Component({
  // moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  schemata: any;

  constructor(private schemaService: SchemaService) {
  }

  ngOnInit(): void {
    this.schemaService.getSchemata()
      .then(schemata => {
          this.schemata = schemata;
        }
      );
  }

}
