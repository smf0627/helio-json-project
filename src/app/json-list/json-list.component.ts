import { Component, OnInit } from '@angular/core';

import { Json } from '../json';
import { JsonService } from '../json.service';



@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css'],
  providers: [JsonService]
})



export class JsonListComponent implements OnInit {

  title = 'Tour of JSON';
  jsons: Json[];
  // jsons = JSONS;
  selectedJson: Json;

  constructor(private jsonService: JsonService) { }

  getJsons(): void {
    this.jsonService.getJsons().then(jsons => this.jsons = jsons);
  }

  ngOnInit(): void {
    this.getJsons();
  }

  onSelectJson(json: Json): void {
    this.selectedJson = json;
  }

  /*onAddJsonClick() {
    this.selectedJson = new Json('', '');
  }*/

  /*onAddJson(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.jsonService.create(name)
      .then(json => {
        this.jsons.push(json);
        this.selectedJson = null;
      });
  }*/

  /* onAddJson(name: string): void {
   name = name.trim();
   if (!name) { return; }
   console.log(name);
   //JSONS.push(Json.name); // Not right
   } */

}
