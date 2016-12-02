import { Component, OnInit } from '@angular/core';

import { Json } from '../json';


const JSONS: Json[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css']
})



export class JsonListComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

  title = 'Tour of JSON';
  jsons = JSONS;
  selectedJson: Json;

  onJsonSelect(json: Json): void {
    this.selectedJson = json;
  }


}
