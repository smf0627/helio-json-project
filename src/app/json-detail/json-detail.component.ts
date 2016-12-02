import { Component, Input } from '@angular/core';

import { Json } from '../json';


@Component({
  selector: 'app-json-detail',
  templateUrl: './json-detail.component.html',
  styleUrls: ['./json-detail.component.css']
})


export class JsonDetailComponent {
/// export class JsonDetailComponent implements OnInit {
  //constructor() { }

  @Input()
  json: Json;

  ngOnInit() {
  }


}
